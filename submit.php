<?php
$to = 'me@jacobhl.com';
$subject = 'Test Email';
$message = 'This is a test email.';
$headers = 'From: your-email@example.com';

if (mail($to, $subject, $message, $headers)) {
  echo 'Email sent successfully.';
} else {
  echo 'Error sending email.';
}
?>
