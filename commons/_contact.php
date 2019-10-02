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
		<!--
		<div class="map2">
			<h3 class="sectionTitle normalText">
				Puede visitarnos en nuestras oficinas.
			</h3>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25038.043794276884!2d-101.6674936632742!3d21.115481801119984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe5ab16730e1%3A0xce8c2e1aafa63369!2sBlvd.%20Adolfo%20L%C3%B3pez%20Mateos%2C%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses!2smx!4v1569091360718!5m2!1ses!2smx" style="border:0;" allowfullscreen></iframe>
		</div>
	-->
		<div class="map"></div>
	</div>
</section>