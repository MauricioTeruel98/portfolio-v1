# 📧 Configuración del Sistema de Emails

Esta guía te ayudará a configurar el sistema de envío de emails de tu portfolio paso a paso.

## 🚀 Pasos de Configuración

### 1. **Configurar el Backend en Hostinger**

#### a) Subir archivos al hosting
1. Accede a tu panel de Hostinger
2. Ve al administrador de archivos
3. Navega a `public_html/`
4. Crea una carpeta llamada `api`
5. Sube todos los archivos de la carpeta `backend/` a `public_html/api/`

#### b) Instalar dependencias PHP
1. En el administrador de archivos, dentro de la carpeta `api/`
2. Si tienes acceso SSH, ejecuta: `composer install`
3. Si no tienes SSH, descarga las dependencias localmente y sube la carpeta `vendor/`

#### c) Configurar credenciales SMTP
1. Edita el archivo `api/config.php`
2. Busca estas líneas y cámbialas por tus datos reales:

```php
// 🔸 CAMBIAR ESTOS VALORES
define('SMTP_HOST', 'smtp.hostinger.com');          // Tu servidor SMTP
define('SMTP_USERNAME', 'contacto@tudominio.com');  // Tu email de dominio
define('SMTP_PASSWORD', 'tu_password_aquí');        // Tu contraseña de email
define('CONTACT_EMAIL', 'mauricio@tudominio.com');  // Email donde recibes mensajes
```

### 2. **Configurar el Frontend**

#### a) Actualizar URL de la API
1. Edita el archivo `src/config/api.js`
2. Busca esta línea:

```javascript
const PRODUCTION_API_URL = 'https://tudominio.com/api'; // 🔸 CAMBIAR POR TU URL REAL
```

3. Cámbiala por tu dominio real, por ejemplo:
```javascript
const PRODUCTION_API_URL = 'https://mauricioteruel.com/api';
```

### 3. **Obtener Credenciales SMTP de Hostinger**

#### a) Crear email de dominio
1. En tu panel de Hostinger, ve a "Emails"
2. Crea un email como `contacto@tudominio.com`
3. Anota la contraseña que asignes

#### b) Datos SMTP comunes de Hostinger
```
Host: smtp.hostinger.com
Puerto: 587
Seguridad: TLS
```

### 4. **Probar la Configuración**

#### a) Probar desde local
1. Abre el archivo `backend/test-api.html` en tu navegador
2. Cambia la URL de la API en el JavaScript por tu URL real
3. Completa y envía el formulario de prueba

#### b) Probar desde tu portfolio
1. Despliega tu frontend
2. Ve a la sección de contacto
3. Envía un mensaje de prueba
4. Revisa que llegue a tu email

## 🔧 Estructura de Archivos Final

```
Tu hosting (public_html/):
├── api/
│   ├── index.php              # Punto de entrada de la API
│   ├── config.php             # ⚠️ Configurar con tus datos
│   ├── EmailSender.php        # Lógica de envío
│   ├── composer.json
│   ├── .htaccess
│   └── vendor/                # Dependencias de PHP
│
Tu proyecto local:
├── src/
│   ├── config/
│   │   └── api.js             # ⚠️ Configurar URL de tu API
│   └── components/
│       └── Contacto.jsx       # ✅ Ya actualizado
```

## 🐛 Solución de Problemas

### Error: "SMTP connection failed"
- ✅ Verifica las credenciales en `config.php`
- ✅ Confirma que tu hosting permita SMTP saliente
- ✅ Prueba diferentes puertos: 587, 465, 25

### Error: "CORS blocked"
- ✅ Verifica que el archivo `.htaccess` esté en la carpeta `api/`
- ✅ Contacta soporte de Hostinger para habilitar headers CORS

### Error: "Failed to fetch"
- ✅ Verifica la URL en `src/config/api.js`
- ✅ Confirma que la API esté accesible desde tu navegador
- ✅ Revisa la consola del navegador para más detalles

### Emails no llegan
- ✅ Revisa la carpeta de spam
- ✅ Verifica que `CONTACT_EMAIL` esté correcto
- ✅ Confirma que el dominio de origen existe

## 📋 Checklist de Configuración

- [ ] ✅ Backend subido a Hostinger
- [ ] ✅ Dependencias PHP instaladas (`composer install`)
- [ ] ✅ Credenciales SMTP configuradas en `config.php`
- [ ] ✅ URL de API actualizada en `src/config/api.js`
- [ ] ✅ Frontend desplegado
- [ ] ✅ Prueba de envío exitosa
- [ ] ✅ Email de prueba recibido

## 📞 URLs Importantes

- **API de contacto:** `https://tudominio.com/api/send-email`
- **Prueba de API:** `https://tudominio.com/api/test-api.html`
- **Panel Hostinger:** https://hpanel.hostinger.com

## 🎯 Próximos Pasos

Una vez configurado, tu formulario de contacto:
- ✅ Validará todos los campos automáticamente
- ✅ Enviará emails con plantilla profesional
- ✅ Mostrará mensajes de éxito/error
- ✅ Funcionará tanto en desarrollo como producción

¡Tu sistema de contacto estará listo para recibir mensajes de clientes potenciales! 🚀
