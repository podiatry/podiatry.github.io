<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Process the form data (e.g., send an email, store in a database, etc.)
  // Replace this code with your desired functionality

  // Example: Send an email with the form details
  $to = 'me+foot@jacobhl.com'; // Replace with your email address
  $subject = 'Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = 'From: ' . $email;

  if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo 'Thank you for your message! We will get back to you shortly.';
  } else {
    // Error sending email
    echo 'Oops! An error occurred. Please try again.';
  }
}
?>

 <!-- 
 In this example, the script sends an email to the specified email address with the form details. You can modify the code to fit your specific requirements, such as storing the form data in a database or performing additional actions. 
 -->