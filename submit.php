<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $client_name = $_POST['client_name'];
    $phone_no = $_POST['phone_no'];
    $email = $_POST['email'];
    $city_state = $_POST['city_state'];
    $services = implode(", ", $_POST['services']);
    $how_hear = $_POST['how_hear'];
    $call_back_time = $_POST['call_back_time'];
    $time_input = $_POST['time_input'];
    $contact_devjix = isset($_POST['contact_devjix']) ? "Yes" : "No";

    // Compose email message
    $to = "92amirwasif@gmail.com"; // Change this to your email
    $subject = "New Inquiry from $client_name";

    // Build email body with colors and styling
    $body = '<html><body>';
    $body .= '<h2 style="color: #007bff;">New Inquiry Details:</h2>';
    $body .= '<p><strong style="color: #28a745;">Full Name:</strong> ' . $client_name . '</p>';
    $body .= '<p><strong style="color: #28a745;">Phone Number:</strong> ' . $phone_no . '</p>';
    $body .= '<p><strong style="color: #28a745;">Email Address:</strong> ' . $email . '</p>';
    $body .= '<p><strong style="color: #28a745;">City/State:</strong> ' . $city_state . '</p>';
    $body .= '<p><strong style="color: #28a745;">Favorite Services:</strong> ' . $services . '</p>';
    $body .= '<p><strong style="color: #28a745;">How did you hear about us?:</strong> ' . $how_hear . '</p>';
    $body .= '<p><strong style="color: #28a745;">Callback Time:</strong> ' . $call_back_time . '</p>';
    if (!empty($time_input)) {
        $body .= '<p><strong style="color: #28a745;">Time Input:</strong> ' . $time_input . '</p>';
    }
    $body .= '<p><strong style="color: #28a745;">Contacting Devjix:</strong> ' . $contact_devjix . '</p>';
    $body .= '</body></html>';

    // Email headers to set content type as HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your inquiry to Devjix. Our team get back to you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>