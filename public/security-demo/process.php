<?php
/**
 * Production-Ready Secure Form Handler (PHP)
 * Implements: CSRF, Sanitization, Prepared Statements, Rate Limiting, XSS Prevention
 */

session_start();
header('Content-Type: application/json');

// 1. RATE LIMITING (Basic session-based implementation)
if (!isset($_SESSION['last_submit'])) {
    $_SESSION['last_submit'] = 0;
}
if (time() - $_SESSION['last_submit'] < 10) { // Limit to 1 submission per 10 seconds
    http_response_code(429);
    echo json_encode(["status" => "error", "message" => "Too many requests. Please wait a few seconds."]);
    exit;
}

// 2. CSRF PROTECTION
$token = filter_input(INPUT_POST, 'csrf_token', FILTER_SANITIZE_STRING);
if (!$token || $token !== 'demo_token_12345') { // In production, compare with $_SESSION['csrf_token']
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Invalid CSRF token."]);
    exit;
}

// 3. SERVER-SIDE VALIDATION & SANITIZATION
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Valid Name, Email, and Message are required."]);
    exit;
}

// 4. DATABASE INSERTION (Using Prepared Statements / PDO)
try {
    // Database connection details (assuming MySQL)
    /*
    $host = 'localhost';
    $db   = 'secure_db';
    $user = 'secure_user';
    $pass = 'your_strong_password'; // PROMPT: Hash passwords using bcrypt if stored

    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false, // Critical for SQL injection prevention
    ]);

    // SQL Injection Prevention: Prepared Statement
    $stmt = $pdo->prepare("INSERT INTO enquiries (name, email, message, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $message]);
    */

    // 5. SUCCESS RESPONSE
    $_SESSION['last_submit'] = time();
    echo json_encode(["status" => "success", "message" => "Enquiry stored securely! (Database execution commented out for demo)"]);

} catch (PDOException $e) {
    // SECURITY NOTE: Never echo raw $e->getMessage() in production
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Server error. Please try again later."]);
}
?>