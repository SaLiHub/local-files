<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = newPHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

$mail->setFrom('hunter228777@gmail.com','Кирилович');
$mail->addAdress('sashalischinskiy72@gmail.com');
$mail->Subject = 'Отчислен!!! ВАК';


if(!$mail->send()) {
    $message = 'Error';
} else {
    $message = 'Message was successfully send';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);
?>