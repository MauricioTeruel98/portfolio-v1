<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'success' => true,
    'message' => 'Servidor PHP funcionando correctamente',
    'method' => $_SERVER['REQUEST_METHOD'],
    'server_info' => [
        'php_version' => phpversion(),
        'request_method' => $_SERVER['REQUEST_METHOD'],
        'request_uri' => $_SERVER['REQUEST_URI'] ?? '',
        'path_info' => $_SERVER['PATH_INFO'] ?? '',
        'query_string' => $_SERVER['QUERY_STRING'] ?? '',
        'headers' => getallheaders()
    ]
]);
?>
