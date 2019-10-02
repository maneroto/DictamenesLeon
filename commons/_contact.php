<section class="contactSection">
	<h2 class="sectionTitle boldText">
		Contáctanos
	</h2>
	<div class="contactContent">
		<div class="form">
			<h3 class="sectionTitle dark normalText">
				Evaluamos su caso de manera gratuita.
			</h3>
			<form class="contactForm" method="post" onsubmit="return validateMail(event)">
				<div class="formField">
					<label for="name">Nombre:</label>
					<input type="text" name="name" id="name" required>
				</div>
				<div class="formField">
					<label for="email">Correo electrónico:</label>
					<input type="email" name="email" id="email" required>
				</div>
				<select name="serviceType" required>
					<option value="" selected disabled>Selecciona el tipo de servicio</option>
					<option value="Pensión">Pensión</option>
					<option value="Seguro">Seguro</option>
					<option value="Afore">Afore</option>
					<option value="Curso">Curso</option>
					<option value="Capacitación">Capacitación</option>
					<option value="Asesoría">Asesoría a empresa</option>
					<option value="Otro">Otro (especificar en la descripción del caso)</option>
				</select>
				<textarea placeholder="Describa brevemente su caso" maxlength="200" name='message' required></textarea>
				<input type="hidden" name="recaptcha_response" id="recaptchaResponse">
				<button type="submit" class="btn dark xCenter">Enviar</button>
			</form>
		</div>
		<div class="map">
			<h3 class="sectionTitle normalText">
				Puede visitarnos en nuestras oficinas.
			</h3>
			<a href="https://www.google.com/maps/place/Blvd.+Adolfo+L%C3%B3pez+Mateos,+Le%C3%B3n,+Gto./@21.1173758,-101.6609788,17z/data=!3m1!4b1!4m5!3m4!1s0x842bbe5ab16730e1:0xce8c2e1aafa63369!8m2!3d21.1173758!4d-101.6587901">
				<img class="lazy" data-src="<?php echo $httpProtocol.$host.$url?>img/contactMap.png" alt='Oficina en guanajuato'></img>
			</a>
		</div>
	</div>
</section>