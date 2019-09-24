document.addEventListener("DOMContentLoaded", () =>
{
	setupInputs();
	document.querySelector('.nav').submenu({closeButton: '.closeButton'});
	document.querySelector('.aboutSection').slider();
	setNavScrollBehavior();
	setScrollListeners();
	setBodyPadding();
});

window.onresize = () =>
{
	setBodyPadding();
}

const setNavScrollBehavior = () =>
{
	var prevScrollpos = window.pageYOffset;
	window.onscroll =() => {
	  var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.querySelector("nav").style.top = "0";
	  } else {
	    document.querySelector("nav").style.top = "-100vh";
	  }
	  prevScrollpos = currentScrollPos;
	}
}

const setBodyPadding = () =>
{
	document.querySelector('body').style.paddingTop = $('nav').height() + 'px';
}

const toggleActive = selector =>
{
	document.querySelector(selector).classList.toggle('active');
}

const setupInputs = () =>
{
	clearInputs();
	let inputs = document.querySelectorAll("input");
	for (let i = 0; i < inputs.length; i ++)
	{
		inputs[i].addEventListener(
		"focus", function(){
			this.parentElement.classList.add("active");
		}
		);

		inputs[i].addEventListener(
		"blur", function()
		{
			if (this.value == "") this.parentElement.classList.remove("active");
		}
		);
	}
}

const clearInputs = () =>
{
	let inputs = document.querySelectorAll("input");
	for (let i = 0; i < inputs.length; i ++)
	{
		inputs[i].value = "";
	}
}

const setScrollListeners = () =>
{
	let listeners = document.querySelectorAll('[data-target]');

	for (let i = 0; i < listeners.length; i ++)
	{
		listeners[i].addEventListener('click', function()
		{
			scrollTo(listeners[i].dataset.target);
		});
	}
}

const scrollTo = (target) =>
{
	document.querySelector(target).scrollIntoView({block: 'start', behavior: 'smooth'});
}

function validateMail(event)
{
  event.preventDefault();
	let form = document.querySelector('.contactForm');

  let name = document.querySelector('[name="name"]').value;
  let email = document.querySelector('[name="email"]').value;
  let serviceType = document.querySelector('[name="serviceType"]').value;
  let mensaje = document.querySelector('[name="message"]').value;

  if (name == '') 
  {
    alertAndFocus('[name="name"]', 'El Nombre es obligatorio');
  } 
  else if (email == '') 
  {
    alertAndFocus('[name="email"]', 'El correo es obligatorio');
  } 
  else if (regValidation(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) 
  {
    alertAndFocus('[name="email"]', 'Formato de correo incorrecto');
  } 
  else if (serviceType == '') 
  {
    alertAndFocus('[name="serviceType"]', 'El tipo de servicio es obligatorio');
  } 
  else if (mensaje == '') 
  {
    alertAndFocus('[name="message"]', 'El mensaje es obligatorio');
  }
  else 
  {
    let post_data = $('form').serialize();
    $.post('php/mail/send_mail', post_data, function(data) {
      switch (String(data).trim()) 
      {
        case "mailSent":
          window.location = "https://www.google.com/";
          break;
        case "captchaError":
          alert("No se validó el captcha correctamente");
          break;
        default:
          alert("No se pudo enviar el formulario, por favor intenta nuevamente.");
          window.location.reload();
        break;
      }
    });
  }
  return false;
}

function alertAndFocus(toFocus, message)
{
  document.querySelector(toFocus).focus();
  alert(message);
}