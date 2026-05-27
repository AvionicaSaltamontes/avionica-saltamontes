<?php

require_once __DIR__ . '/config/bootstrap.php';

header("Content-Type: application/json; charset=utf-8");

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (app_origin_is_allowed($origin)) {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Vary: Origin");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$response = [
    "status" => "success",
    "message" => "Avionica Saltamontes API"
];

$requestPath = isset($_SERVER['REDIRECT_URL'])
    ? (string)$_SERVER['REDIRECT_URL']
    : parse_url((string)($_SERVER['REQUEST_URI'] ?? ''), PHP_URL_PATH);

if($requestPath == '/services/transactional/mailing/send')
{
    http_response_code(400);
    $response = [
        "status" => "success",
        "message" => "Avionica Saltamontes API"
    ];
    $response = include 'endpoints/services/transactional/mailing/send.php';
}

if($requestPath == '/services/transactional/mailing/v2/send')
{
    http_response_code(400);
    $response = [
        "status" => "success",
        "message" => "Avionica Saltamontes API"
    ];
    $response = include 'endpoints/services/transactional/mailing/send.v2.php';
}

if($requestPath == '/services/transactional/mailing/v3/send')
{
    http_response_code(400);
    $response = [
        "status" => "success",
        "message" => "Avionica Saltamontes API"
    ];
    $response = include 'endpoints/services/transactional/mailing/send.v3.php';
}

echo json_encode($response);

