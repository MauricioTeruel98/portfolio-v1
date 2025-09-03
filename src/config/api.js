// Configuración de la API del backend
// 🔸 IMPORTANTE: Cambia esta URL por la de tu hosting de Hostinger

// Para desarrollo local (si tienes el backend corriendo localmente)
const LOCAL_API_URL = 'http://localhost/api-portfolio';

// Para producción (tu dominio de Hostinger)
const PRODUCTION_API_URL = 'https://zynodestudio.com/backend/api-portfolio'; // 🔸 URL CORREGIDA - Sin /send-email

// Detectar automáticamente el entorno
const isDevelopment = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname.includes('localhost');

// Exportar la URL base de la API
export const API_BASE_URL = isDevelopment ? LOCAL_API_URL : PRODUCTION_API_URL;

// Endpoints disponibles
export const API_ENDPOINTS = {
    SEND_EMAIL: '/send-email'
};

// Configuración de fetch por defecto
export const API_CONFIG = {
    headers: {
        'Content-Type': 'application/json',
    },
    // Tiempo de espera para las peticiones (en milisegundos)
    timeout: 30000
};

// Función helper para hacer peticiones a la API
export const apiRequest = async (endpoint, options = {}) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
        ...API_CONFIG,
        ...options,
        headers: {
            ...API_CONFIG.headers,
            ...(options.headers || {})
        }
    };

    try {
        const response = await fetch(url, config);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || `Error HTTP: ${response.status}`);
        }
        
        return data;
    } catch (error) {
        // Log del error para debugging
        console.error('Error en petición API:', {
            url,
            error: error.message,
            config
        });
        
        throw error;
    }
};

// Función específica para enviar emails
export const sendContactEmail = async (contactData) => {
    return await apiRequest(API_ENDPOINTS.SEND_EMAIL, {
        method: 'POST',
        body: JSON.stringify(contactData)
    });
};
