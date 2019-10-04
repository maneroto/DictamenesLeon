<nav class="nav">
	<div class="navContent">
		<img src="<?php echo $httpProtocol.$host.$url ?>img/Logo.svg" alt="Gerpensiones" class="logo" data-target='.bannerSection'>
		<i class="fas fa-bars mobile toggleMenu" onclick="toggleActive('.navMenu')"></i>
		<ul class="navMenu">
			<li data-target = '.aboutSection'>
				Nosotros
			</li>
			<li>
				<span class="submenuDisplayer">
					Nuestros servicios
				</span>
				<div class="submenu">
					<ul class="navMenu">
						<li data-target='.pensionesService'>
							Pensiones
						</li>
						<li data-target='.segurosService'>
							Seguros
						</li>
						<li data-target='.aforesService'>
							Afores
						</li>
						<li data-target='.capacitacionesService'>
							Cursos y capacitaciones
						</li>
						<li data-target='.asesoriasService'>
							Asesorías
						</li>
					</ul>
					<div class="closeButton mobile">x</div>
				</div>
			</li>
			<li data-target='.otherServicesSection'>
				Otros servicios
			</li>
			<li data-target='.activityContainer'>
				Nuestra agenda
			</li>
			<li data-target='.contactSection'>
				Contacto
			</li>
		</ul>
	</div>
</nav>