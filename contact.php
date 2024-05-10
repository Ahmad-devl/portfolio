<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Compose email message
    $to = "92amirwasif@gmail.com"; // Change this to your email
    $subject = "New Message: $subject";

    // Build email body with colors and styling
    $body = '<html><body>';
    $body .= '<h2 style="color: #007bff;">New Message Details:</h2>';
    $body .= '<p><strong style="color: #28a745;">Name:</strong> ' . $name . '</p>';
    $body .= '<p><strong style="color: #28a745;">Email:</strong> ' . $email . '</p>';
    $body .= '<p><strong style="color: #28a745;">Subject:</strong> ' . $subject . '</p>';
    $body .= '<p><strong style="color: #28a745;">Message:</strong> ' . $message . '</p>';
    $body .= '</body></html>';

    // Email headers to set content type as HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully to Devjix.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>