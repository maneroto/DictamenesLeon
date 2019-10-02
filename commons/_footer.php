	<footer class="footer">
		<div class="footerContent">
			<div class="grid">
				<div class="links">
					<p class="footerTitle">
						Links
					</p>
					<ul>
						<li data-target='.aboutSection'>
							Nosotros
						</li>
						<li>
							Nuestros servicios
							<ul class="footerServicesLinks">
								<li data-target='.pensionesService'>
									<i class="fas fa-chevron-right"></i> Pensiones
								</li>
								<li data-target='.segurosService'>
									<i class="fas fa-chevron-right"></i> Seguros
								</li>
								<li data-target='.aforesService'>
									<i class="fas fa-chevron-right"></i> Afores
								</li>
								<li data-target='.capacitacionesService'>
									<i class="fas fa-chevron-right"></i> Cursos y capacitaciones
								</li>
								<li data-target='.asesoriasService'>
									<i class="fas fa-chevron-right"></i> Asesoría a empresas
								</li>
							</ul>
						</li>
						<li data-target='.otherServicesSection'>
							Otros servicios
						</li>
						<li data-target='.contactSection'>
							Contacto
						</li>
					</ul>
				</div>
				<div class="contact">
					<p class="footerTitle">
						Contacto
					</p>
					<ul>
						<li>
							Redes sociales
							<ul>
								<li>
									<a href="">
										<i class="fab fa-whatsapp"></i> Whatsapp: 477 804 9612
									</a>
								</li>
								<li>
									<i class="fas fa-envelope"></i> Mail: contacto@gerpensiones.com
								</li>
								<li>
									<i class="fas fa-envelope"></i> Mail secundario: tuejecutivoas@gmail.com
								</li>
							</ul>
						</li>
						<li>
							Teléfonos
							<ul>
								<li>
									<i class="fas fa-phone"></i> Móvil: 477 804 9612
								</li>
								<li>
									<i class="fas fa-building"></i> Oficina: 477 804 9614
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="about notInMobile">
					<p class="footerTitle">
						Acerca de
					</p>
					<p>
						<?php echo $description;?>
					</p>
					<p>
						RFC CAVG 681218IR6 <br>
						NUMERO DE CONSAR 1907080442
					</p>
					<button class="btn dark smallText">
						Envíanos un correo
					</button>
				</div>
			</div>
			<div class="ubication">
				Ubicación
				<div class="row">
					<div class="col">
						<p>
							<i class="fas fa-map-marker-alt"></i> Dirección de la oficina en Guanajuato: <br>
							Blvd. Adolfo López Mateos, Esquina Hidalgo edificio número 212 despacho 501 quinto piso León, Gto. Cp. 37000 

						</p>
					</div>
					<div class="col">
						<p>
							<i class="fas fa-map-marker-alt"></i> Dirección de la oficina en Yucatán: <br>
							Calle 41 A POR 66 Y 68 A numero 647 Colonia HOGARES CAUCEL., MERIDA,YUCATAN C.P. 97314
						</p>
					</div>
				</div>
			</div>
			<div class="copyright">
				&copy; Gerpensiones 2019
				<span class="author">
					<a href="mailto:maneroto@hotmail.com?Subject=Me%20gusta%20su%20trabajo%20hecho%20en%20Gerpensiones">
						Made by Strix Development
					</a>
				</span>
			</div>
		</div>
	</footer>
	<?php if (isset($js)) echo $js;?>
	</body>
</html>