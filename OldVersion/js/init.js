window.onload = 
function()
{
	/*
	$.fn.goTo = function() {
	    $('html, body').animate({
	        scrollTop: $(this).offset().top + 'px'
	    }, 'low');
	    return this; // for chaining...
	}*/
	setNavScrollBehavior();
	//setAnchors();
	setupInputs();

	document.querySelector('#companyInformation').slider(
	{
		sliderItemName: 'article',
		auto: true,
		autoDuration: 5
	});

	checkMobileDevice();
};

function isMobile()
{
	mobile = 
	{
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows());
	    }
	};
	return mobile.any();
}

function checkMobileDevice()
{
	let inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='url']");
	for(let i = 0; i < inputs.length; i++)
	{
		if (isMobile()) 
		{
			inputs[i].style.fontSize = '16px';
			let viewheight = $(window).height();
			let viewwidth = $(window).width();
			let viewport = document.querySelector("meta[name=viewport]");
			viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
		}
	}
}
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