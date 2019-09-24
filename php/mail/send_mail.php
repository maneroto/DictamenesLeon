<?php
	$captcha_status = TRUE;


	$response = "";
	if($captcha_status === FALSE){
		$response = "captchaError";
	}
	else
	{
		$name = $_POST["name"];
		$email = $_POST["email"];
		$phone = $_POST['phone'];
		$serviceType = $_POST['serviceType'];
        $message = $_POST['message'];

		$subject = "Formulario de Contacto";
		$content = "";

		$content .= "<p style='color: #ff3b3f; font-family: Arial;'>La siguiente persona lleno el formulario de Contacto</p>";
		$content .= "<p style='color: #333333; font-family: Arial;'>Nombre: ".$name."</p>";
		$content .= "<p style='color: #333333; font-family: Arial;'>Correo eletrónico: ".$email."</p>";
		$content .= "<p style='color: #333333; font-family: Arial;'>Teléfono: ".$serviceType."</p>";
		$content .= "<p style='color: #333333; font-family: Arial;'>Mensaje: ".$message."</p>";

		include_once('class.phpmailer.php');
		include_once('class.smtp.php');
		$mail = new PHPMailer();
		$mail->From = "contacto@gerpensiones.com";
		$mail->FromName = "Contacto - Gerpensiones";
		$mail->AddAddress("maneroto@hotmail.com");
		//$mail->AddAddress("contacto@gerpensiones.com");
		$mail->Subject = $subject;
		$mail->Body = $content; 
		$mail->MsgHTML($content);
		$mail->CharSet = 'UTF-8';

		if($mail->Send()){
			$response = "mailSent";
		}else{
            $response = "mailNotSent";
		}
	}
	echo $response;
?>