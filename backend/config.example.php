<?php
// Configuración del servidor de correo
// IMPORTANTE: Cambia estos valores por los de tu hosting de Hostinger

// Configuración SMTP para Hostinger
define('SMTP_HOST', '');
define('SMTP_PORT', 587); // Cambiar a 587 para TLS (más compatible)
define('SMTP_USERNAME', '');
define('SMTP_PASSWORD', '');
define('SMTP_SECURE', 'tls'); // Cambiar a TLS

// Configuración alternativa si la anterior no funciona:
// define('SMTP_PORT', 465);
// define('SMTP_SECURE', 'ssl');

// Email de destino (donde llegarán los mensajes de contacto)
define('CONTACT_EMAIL', ''); // Tu email personal donde quieres recibir los mensajes

// Configuración general
define('SITE_NAME', '');
define('SITE_URL', '');

// Límite de caracteres para los campos
define('MAX_NAME_LENGTH', 100);
define('MAX_EMAIL_LENGTH', 255);
define('MAX_SUBJECT_LENGTH', 200);
define('MAX_MESSAGE_LENGTH', 2000);

// Lista de dominios de email válidos (opcional, para filtrar spam)
$allowed_email_domains = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'live.com',
    'icloud.com',
    'protonmail.com',
    // Agrega más dominios según necesites
];
?>
