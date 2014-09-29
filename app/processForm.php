<?php
 
// Define some constants
define( "RECIPIENT_NAME", "John Park" );
define( "RECIPIENT_EMAIL", "johnpark.rice@gmail.com" );
define( "EMAIL_SUBJECT", "Homepage Contact Form Submission" );
 
// Read the form values
$success = false;
$inputName = isset( $_POST['inputName'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['inputName'] ) : "";
$inputEmail = isset( $_POST['inputEmail'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['inputEmail'] ) : "";
$inputMessage = isset( $_POST['inputMessage'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['inputMessage'] ) : "";

// Combine input information into e-mail message body
$message = "Name: " . $inputName . "\nEmail: " . $inputEmail . "\nMessage: " . $inputMessage;
 
// If all values exist, send the email
if ( $inputName && $inputEmail && $inputMessage ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: DO-NOT-REPLY@john-park.net";
  $success = mail( $recipient, EMAIL_SUBJECT, $message, $headers );
} else {
	$formValid = false;
	$htmlheading = "Sorry, we've encountered an error.";
	$htmlmessage = "One of the required fields were missing. Please try again.";
}
 
// Return an appropriate response to the browser
if ( isset($_GET["ajax"]) ) {
  echo $success ? "success" : $htmlmessage;
} else {
	if ($success) {
		$htmlheading = "Submission successful!";
		$htmlmessage = "Thank you for sending your message! We'll get back to you shortly.";
	} else {
		if ($formValid) {
			$htmlheading = "Sorry, we've encountered an error.";
			$htmlmessage = "There was a problem submitting the form on our side. Please try again later.";
		}
	}
	echo 
	"<!DOCTYPE html>
	<html>
	  <head>
	  </head>
	  <body>
	    <p>Thank you for your submission</p>
	  </body>
	</html>
	";
}
?>