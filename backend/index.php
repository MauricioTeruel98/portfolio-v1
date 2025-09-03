<?php
// Debug info - remover después de probar
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Manejo de preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Agregar información de debug
$debug_info = [
    'method' => $_SERVER['REQUEST_METHOD'],
    'path_info' => $_SERVER['PATH_INFO'] ?? '',
    'request_uri' => $_SERVER['REQUEST_URI'] ?? '',
    'query_string' => $_SERVER['QUERY_STRING'] ?? ''
];

// Permitir GET para debug (temporal)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode([
        'success' => true,
        'message' => 'API funcionando correctamente',
        'debug' => $debug_info,
        'endpoints' => ['/send-email (POST)']
    ]);
    exit();
}

// Solo permitir métodos POST para endpoints reales
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Solo se acepta POST.',
        'debug' => $debug_info
    ]);
    exit();
}

// Incluir archivos necesarios
require_once 'config.php';
require_once 'EmailSender.php';

try {
    // Obtener datos del cuerpo de la petición
    $input = json_decode(file_get_contents('php://input'), true);
    
    if ($input === null) {
        throw new Exception('Datos JSON inválidos');
    }
    
    // Crear instancia del enviador de emails
    $emailSender = new EmailSender();
    
    // Procesar la petición según el endpoint
    $path = $_SERVER['PATH_INFO'] ?? '';
    $request_uri = $_SERVER['REQUEST_URI'] ?? '';
    
    // Si PATH_INFO está vacío, intentar extraer de REQUEST_URI
    if (empty($path)) {
        if (strpos($request_uri, '/send-email') !== false) {
            $path = '/send-email';
        }
    }
    
    // Debug info adicional
    if (empty($path)) {
        throw new Exception('Endpoint no encontrado. Debug: PATH_INFO=' . $path . ', REQUEST_URI=' . $request_uri);
    }
    
    switch ($path) {
        case '/send-email':
            $result = $emailSender->sendContactEmail($input);
            break;
            
        default:
            throw new Exception('Endpoint no encontrado: ' . $path);
    }
    
    // Respuesta exitosa
    echo json_encode($result);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>
