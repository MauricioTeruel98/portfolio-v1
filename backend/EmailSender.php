<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once 'vendor/autoload.php';

class EmailSender {
    
    private function validateEmailData($data) {
        $errors = [];
        
        // Validar nombre
        if (empty($data['name'])) {
            $errors[] = 'El nombre es requerido';
        } elseif (strlen($data['name']) > MAX_NAME_LENGTH) {
            $errors[] = 'El nombre no puede tener más de ' . MAX_NAME_LENGTH . ' caracteres';
        } elseif (!preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/', $data['name'])) {
            $errors[] = 'El nombre solo puede contener letras y espacios';
        }
        
        // Validar email
        if (empty($data['email'])) {
            $errors[] = 'El email es requerido';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'El formato del email no es válido';
        } elseif (strlen($data['email']) > MAX_EMAIL_LENGTH) {
            $errors[] = 'El email no puede tener más de ' . MAX_EMAIL_LENGTH . ' caracteres';
        }
        
        // Validar asunto
        if (empty($data['subject'])) {
            $errors[] = 'El asunto es requerido';
        } elseif (strlen($data['subject']) > MAX_SUBJECT_LENGTH) {
            $errors[] = 'El asunto no puede tener más de ' . MAX_SUBJECT_LENGTH . ' caracteres';
        }
        
        // Validar mensaje
        if (empty($data['message'])) {
            $errors[] = 'El mensaje es requerido';
        } elseif (strlen($data['message']) > MAX_MESSAGE_LENGTH) {
            $errors[] = 'El mensaje no puede tener más de ' . MAX_MESSAGE_LENGTH . ' caracteres';
        }
        
        // Validar dominio de email (anti-spam básico)
        if (!empty($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            global $allowed_email_domains;
            $emailDomain = substr(strrchr($data['email'], "@"), 1);
            if (!empty($allowed_email_domains) && !in_array($emailDomain, $allowed_email_domains)) {
                $errors[] = 'El dominio del email no está permitido';
            }
        }
        
        return $errors;
    }
    
    private function sanitizeData($data) {
        return [
            'name' => htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8'),
            'email' => filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL),
            'subject' => htmlspecialchars(trim($data['subject']), ENT_QUOTES, 'UTF-8'),
            'message' => htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8')
        ];
    }
    
    public function sendContactEmail($data) {
        // Validar datos
        $errors = $this->validateEmailData($data);
        if (!empty($errors)) {
            throw new Exception('Errores de validación: ' . implode(', ', $errors));
        }
        
        // Sanitizar datos
        $cleanData = $this->sanitizeData($data);
        
        // Configurar PHPMailer
        $mail = new PHPMailer(true);
        
        try {
            // Configuración del servidor
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = SMTP_SECURE;
            $mail->Port = SMTP_PORT;
            $mail->CharSet = 'UTF-8';
            
            // Debug SMTP (temporal)
            $mail->SMTPDebug = 0; // Cambiar a 2 para debug completo
            $mail->Debugoutput = 'error_log';
            
            // Configuración del email
            $mail->setFrom(SMTP_USERNAME, SITE_NAME);
            $mail->addAddress(CONTACT_EMAIL);
            $mail->addReplyTo($cleanData['email'], $cleanData['name']);
            
            // Contenido del email
            $mail->isHTML(true);
            $mail->Subject = '[' . SITE_NAME . '] ' . $cleanData['subject'];
            
            $htmlBody = $this->generateEmailTemplate($cleanData);
            $mail->Body = $htmlBody;
            $mail->AltBody = $this->generateTextEmail($cleanData);
            
            // Enviar email
            $mail->send();
            
            return [
                'success' => true,
                'message' => 'Mensaje enviado correctamente. Te contactaré pronto.'
            ];
            
        } catch (Exception $e) {
            error_log('Error enviando email: ' . $e->getMessage());
            throw new Exception('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
        }
    }
    
    private function generateEmailTemplate($data) {
        $html = '
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo mensaje de contacto</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
                .content { background: #f8f9fa; padding: 30px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #495057; }
                .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #2563eb; }
                .footer { text-align: center; padding: 20px; color: #6c757d; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Nuevo mensaje de contacto</h1>
                    <p>Has recibido un nuevo mensaje desde tu portfolio</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Nombre:</div>
                        <div class="value">' . $data['name'] . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value">' . $data['email'] . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Asunto:</div>
                        <div class="value">' . $data['subject'] . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Mensaje:</div>
                        <div class="value">' . nl2br($data['message']) . '</div>
                    </div>
                </div>
                <div class="footer">
                    <p>Este mensaje fue enviado desde ' . SITE_URL . '</p>
                    <p>Fecha: ' . date('d/m/Y H:i:s') . '</p>
                </div>
            </div>
        </body>
        </html>';
        
        return $html;
    }
    
    private function generateTextEmail($data) {
        $text = "NUEVO MENSAJE DE CONTACTO\n";
        $text .= "========================\n\n";
        $text .= "Nombre: " . $data['name'] . "\n";
        $text .= "Email: " . $data['email'] . "\n";
        $text .= "Asunto: " . $data['subject'] . "\n\n";
        $text .= "Mensaje:\n" . $data['message'] . "\n\n";
        $text .= "------------------------\n";
        $text .= "Enviado desde: " . SITE_URL . "\n";
        $text .= "Fecha: " . date('d/m/Y H:i:s');
        
        return $text;
    }
}
?>
