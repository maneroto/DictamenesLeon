<?php
	$title = 'Gerpensiones - Profesionales en seguridad social y laboral';
	$keywords = 'pensiones, jubilados, jubilación, pensión, cesantía, vejez, incapacidad, orfandad, retiro, afore, afores, trámites, ahorro, retiro, pensiones imss, pensiones issste, pensiones en mexico, pensión imss ley 1973, pensión ley 73, tipos de pensión, cursos de pensiones, ¿Qué son las pensiones?, sistema de pensiones mexicano, modalidad 40';
	$description = 'GERPENSIONES ayuda tanto a los trabajadores que cotizan en la seguridad social en México como a las empresas, ofreciendo orientación con respecto al marco legal de las pensiones IMSS e ISSSTE, así como también de AFORES y SEGUROS.';

	include('commons/_headOpen.php');
	include('commons/_headClose.php');

	$js .=
	'
		<script src="https://www.google.com/recaptcha/api.js?render=6LeDD7oUAAAAAMfrfovbCzQkxsLnfzAbLgGgFbEi"></script>
		<script>
			grecaptcha.ready(function() {
				grecaptcha.execute("6LeDD7oUAAAAAMfrfovbCzQkxsLnfzAbLgGgFbEi", {action: "validateMail"}).then(function(token) {
					var recaptchaResponse = document.getElementById("recaptchaResponse");
					recaptchaResponse.value = token;
				});
			});
       </script>
	';

	include('commons/_nav.php');
	include('commons/_banner.php');
	include('commons/_about.php');
	include 'commons/_activity.php';
	include('commons/_services.php');
	include 'commons/_otherServices.php';
	include('commons/_contact.php');
	include 'commons/_footer.php';
?>