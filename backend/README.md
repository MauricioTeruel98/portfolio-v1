# Backend API para Portfolio - Envío de Emails

Backend sencillo en PHP para el envío de emails desde el formulario de contacto del portfolio.

## 📋 Características

- ✅ API REST para envío de emails
- ✅ Validaciones completas de datos
- ✅ Sanitización de entrada
- ✅ Plantillas HTML para emails
- ✅ Manejo de errores robusto
- ✅ Configuración CORS para frontend
- ✅ Seguridad básica con .htaccess
- ✅ Compatible con hosting compartido (Hostinger)

## 🚀 Instalación

### 1. Subir archivos al hosting

Sube todos los archivos de la carpeta `backend` a tu hosting de Hostinger en una subcarpeta (ej: `public_html/api/`).

### 2. Instalar dependencias

Conéctate por SSH o usa el administrador de archivos de Hostinger para ejecutar:

```bash
composer install
```

Si no tienes acceso a SSH, descarga las dependencias localmente y sube la carpeta `vendor`.

### 3. Configurar credenciales

Edita el archivo `config.php` con tus datos reales:

```php
// Configuración del servidor de correo
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'contacto@tudominio.com'); // Tu email de dominio
define('SMTP_PASSWORD', 'tu_password_de_email');
define('SMTP_SECURE', 'tls');

// Email donde recibirás los mensajes
define('CONTACT_EMAIL', 'mauricio@tudominio.com');
```

### 4. Configurar permisos

Asegúrate de que los permisos de archivos sean correctos:
- Archivos PHP: 644
- Directorios: 755

## 📡 Uso de la API

### Endpoint: Enviar Email

**URL:** `POST /api/send-email`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
    "name": "Juan Pérez",
    "email": "juan@gmail.com",
    "subject": "Consulta sobre desarrollo web",
    "message": "Hola Mauricio, me interesa contactarte para un proyecto..."
}
```

**Respuesta exitosa (200):**
```json
{
    "success": true,
    "message": "Mensaje enviado correctamente. Te contactaré pronto."
}
```

**Respuesta de error (400):**
```json
{
    "success": false,
    "message": "Errores de validación: El nombre es requerido, El email no es válido"
}
```

## 🔧 Integración con el Frontend

### Ejemplo con JavaScript (Fetch API)

```javascript
async function enviarContacto(datos) {
    try {
        const response = await fetch('https://tudominio.com/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)
        });

        const resultado = await response.json();
        
        if (resultado.success) {
            alert('¡Mensaje enviado correctamente!');
        } else {
            alert('Error: ' + resultado.message);
        }
    } catch (error) {
        alert('Error de conexión. Inténtalo de nuevo.');
    }
}

// Uso
enviarContacto({
    name: 'Juan Pérez',
    email: 'juan@gmail.com',
    subject: 'Consulta',
    message: 'Hola, me interesa tu trabajo...'
});
```

### Ejemplo con React

```jsx
import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://tudominio.com/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            
            if (result.success) {
                alert('¡Mensaje enviado correctamente!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            alert('Error de conexión. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Campos del formulario */}
            <button type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
        </form>
    );
}
```

## 🛡️ Validaciones Incluidas

- **Nombre:** Requerido, máximo 100 caracteres, solo letras y espacios
- **Email:** Requerido, formato válido, máximo 255 caracteres
- **Asunto:** Requerido, máximo 200 caracteres
- **Mensaje:** Requerido, máximo 2000 caracteres
- **Dominio de email:** Lista blanca de dominios permitidos (configurable)

## 🔒 Seguridad

- Sanitización de datos de entrada
- Validación de tipos de datos
- Protección contra XSS
- Archivos de configuración protegidos
- Límites de rate limiting (configurable)
- Headers de seguridad en .htaccess

## 📁 Estructura de Archivos

```
backend/
├── index.php          # Punto de entrada de la API
├── config.php         # Configuración (credenciales)
├── EmailSender.php    # Clase para envío de emails
├── composer.json      # Dependencias de PHP
├── .htaccess         # Configuración del servidor
└── README.md         # Esta documentación
```

## 🐛 Solución de Problemas

### Error: "Class 'PHPMailer' not found"
- Ejecuta `composer install` para instalar dependencias
- Asegúrate de que la carpeta `vendor` esté subida al servidor

### Error: "SMTP connection failed"
- Verifica las credenciales SMTP en `config.php`
- Confirma que tu hosting permita conexiones SMTP salientes
- Prueba con diferentes puertos (587, 465, 25)

### Error de CORS
- Verifica que el archivo `.htaccess` esté en el directorio correcto
- Algunos hostings requieren configuración adicional de CORS

### Emails no llegan
- Revisa la carpeta de spam
- Verifica que el email de origen esté configurado correctamente
- Confirma que el dominio tenga registros SPF/DKIM configurados

## 📞 Soporte

Si tienes problemas con la instalación o configuración, revisa los logs de error de tu hosting o contacta con el soporte técnico de Hostinger.

## 📄 Licencia

Este proyecto es de uso libre para tu portfolio personal.
