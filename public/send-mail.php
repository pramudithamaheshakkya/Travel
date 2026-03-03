<?php
header("Content-Type: application/json");

// Prevent direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Load PHPMailer
// Assuming PHPMailer is in a 'phpmailer' directory relative to this script
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Honeypot check
if (!empty($_POST['website'])) {
    // Hidden field 'website' should be empty
    echo json_encode(["status" => "success", "message" => "Enquiry sent successfully"]);
    exit;
}

// Form fields and validation
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$country = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_STRING);
$dates = filter_input(INPUT_POST, 'dates', FILTER_SANITIZE_STRING);
$nights = filter_input(INPUT_POST, 'nights', FILTER_SANITIZE_STRING);
$budget = filter_input(INPUT_POST, 'budget', FILTER_SANITIZE_STRING);
$interests = filter_input(INPUT_POST, 'interests', FILTER_SANITIZE_STRING);
$whatsapp = filter_input(INPUT_POST, 'whatsapp', FILTER_SANITIZE_STRING);

if (!$name || !$email || !$country) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit;
}

$user_ip = $_SERVER['REMOTE_ADDR'];
$date_time = date('Y-m-d H:i:s');

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'zelenso.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'sales@zelenso.com';
    $mail->Password   = '8@fA,mQyUnxE';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('sales@zelenso.com', 'Zelenso Travel');
    $mail->addAddress('contact@zelenso.com');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Website Enquiry from $name";
    
    $messageBody = "
    <h2>New Website Enquiry</h2>
    <p><strong>Full Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Country:</strong> $country</p>
    <p><strong>Travel Dates:</strong> $dates</p>
    <p><strong>Number of Nights:</strong> $nights</p>
    <p><strong>Budget Range:</strong> $budget</p>
    <p><strong>WhatsApp Number:</strong> $whatsapp</p>
    <p><strong>Interests & Preferences:</strong><br>" . nl2br($interests) . "</p>
    <hr>
    <p><strong>Date & Time:</strong> $date_time</p>
    <p><strong>User IP:</strong> $user_ip</p>
    ";

    $mail->Body    = $messageBody;
    $mail->AltBody = strip_tags(str_replace('<br>', "\n", $messageBody));

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Thank you! Your enquiry has been sent successfully."]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
