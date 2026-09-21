<?php
/**
 * submit-lead.php
 *
 * Receives lead submissions from the homepage contact form and the
 * /hire-service page, logs them to a CSV file, and optionally emails
 * a notification. Designed for standard cPanel shared hosting (PHP + no DB required).
 *
 * DEPLOY:
 * 1. Upload this file to your hosting, e.g. public_html/php/submit-lead.php
 * 2. Set $notifyEmail below to your inbox.
 * 3. In the React app's src/useLeadSubmit.js, set LEAD_ENDPOINT to the full URL,
 *    e.g. "https://tomshivehq.com/php/submit-lead.php" (or wherever this is hosted).
 * 4. Make sure the "leads" folder (created automatically) is writable by PHP.
 */

// ---- CONFIG ----
$notifyEmail = "info@hccmechatronics.com"; // <-- update to the real inbox to notify
$logDir = __DIR__ . "/leads";
$logFile = $logDir . "/leads.csv";
$allowedOrigins = ["*"]; // tighten this to your real domain(s) once deployed, e.g. ["https://hccmechatronics.com"]
// ---- END CONFIG ----

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: " . ($allowedOrigins[0] === "*" ? "*" : implode(",", $allowedOrigins)));
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit();
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid payload"]);
    exit();
}

// Basic sanitisation helper
function clean($value) {
    if (!is_string($value)) return "";
    return trim(strip_tags($value));
}

$name = clean($data["name"] ?? "");
$phone = clean($data["phone"] ?? "");
$email = clean($data["email"] ?? "");
$source = clean($data["source"] ?? "unknown");
$submittedAt = clean($data["submittedAt"] ?? date("c"));

if ($name === "" || $phone === "") {
    http_response_code(422);
    echo json_encode(["success" => false, "error" => "Name and phone are required"]);
    exit();
}

// Make sure the leads directory exists
if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
    // Protect the leads folder from direct browsing / access
    file_put_contents($logDir . "/.htaccess", "Deny from all\n");
}

$isNewFile = !file_exists($logFile);
$fh = fopen($logFile, "a");

if ($isNewFile) {
    fputcsv($fh, [
        "submitted_at", "source", "name", "phone", "email",
        "vehicle_make", "vehicle_model", "vehicle_year",
        "service", "budget", "urgency", "contact_time",
        "vehicle", "message", "description",
    ]);
}

fputcsv($fh, [
    $submittedAt,
    $source,
    $name,
    $phone,
    $email,
    clean($data["vehicleMake"] ?? ""),
    clean($data["vehicleModel"] ?? ""),
    clean($data["vehicleYear"] ?? ""),
    clean($data["service"] ?? ""),
    clean($data["budget"] ?? ""),
    clean($data["urgency"] ?? ""),
    clean($data["contactTime"] ?? ""),
    clean($data["vehicle"] ?? ""),
    clean($data["message"] ?? ""),
    clean($data["description"] ?? ""),
]);

fclose($fh);

// Optional: email notification (requires mail() to be configured on your host)
if ($notifyEmail) {
    $subject = "New Lead: {$name} ({$source})";
    $body = "New lead received on " . $submittedAt . "\n\n";
    foreach ($data as $key => $value) {
        if (is_string($value)) {
            $body .= ucfirst($key) . ": " . $value . "\n";
        }
    }
    $headers = "From: no-reply@" . ($_SERVER["HTTP_HOST"] ?? "hccmechatronics.com") . "\r\n";
    @mail($notifyEmail, $subject, $body, $headers);
}

echo json_encode(["success" => true]);
