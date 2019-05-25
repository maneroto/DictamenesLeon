$(document).ready(
function()
{
	
	$.fn.goTo = function() {
	    $('html, body').animate({
	        scrollTop: $(this).offset().top + 'px'
	    }, 'low');
	    return this; // for chaining...
	}
	setNavScrollBehavior();
	setAnchors();
	setupInputs();
});
function setNavScrollBehavior()
{
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.querySelector("nav").style.top = "0";
	  } else {
	    document.querySelector("nav").style.top = "-10vh";
	  }
	  prevScrollpos = currentScrollPos;
	}
}
function setAnchors()
{
	let offers = document.querySelectorAll('.offer');
	for (let i = 0; i < offers.length; i ++)
	{
		console.log(offers[i]);
		offers[i].addEventListener('click', function()
		{
			let currentService = '.service:nth-child('+(i+2)+')';
			console.log(currentService);
			$(currentService).goTo();
		});
	}
}
function setupInputs()
{
	clearInputs();
	let inputs = document.querySelectorAll("input");
	for (let i = 0; i < inputs.length; i ++)
	{
		inputs[i].addEventListener(
		"focus", function(){
			this.parentElement.classList.add("focused");
		}
		);

		inputs[i].addEventListener(
		"blur", function()
		{
			if (this.value == "") this.parentElement.classList.remove("focused");
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