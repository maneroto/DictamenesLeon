document.addEventListener("DOMContentLoaded", () =>
{
	setupInputs();
	document.querySelector('.nav').submenu({closeButton: '.closeButton'});
	document.querySelector('.about').slider();
	setNavScrollBehavior();
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

function setupInputs()
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
function clearInputs(){
	let inputs = document.querySelectorAll("input");
	for (let i = 0; i < inputs.length; i ++)
	{
		inputs[i].value = "";
	}
}