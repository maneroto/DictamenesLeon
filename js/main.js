document.addEventListener("DOMContentLoaded",function(){setupInputs();document.querySelector(".nav").submenu({closeButton:".closeButton"});document.querySelector(".aboutSection").slider();setNavScrollBehavior();setScrollListeners();setBodyPadding()});window.onresize=function(){setBodyPadding()};
var setNavScrollBehavior=function(){var a=window.pageYOffset;window.onscroll=function(){var b=window.pageYOffset;a>b?document.querySelector("nav").style.top="0":document.querySelector("nav").style.top="-100vh";a=b}},setBodyPadding=function(){document.querySelector("body").style.paddingTop=document.querySelector('nav').offsetHeight+"px"},toggleActive=function(a){document.querySelector(a).classList.toggle("active")},setupInputs=function(){clearInputs();for(var a=document.querySelectorAll("input"),b=0;b<a.length;b++)a[b].addEventListener("focus",
function(){this.parentElement.classList.add("active")}),a[b].addEventListener("blur",function(){""==this.value&&this.parentElement.classList.remove("active")})},clearInputs=function(){for(var a=document.querySelectorAll("input"),b=0;b<a.length;b++)a[b].value=""},setScrollListeners=function(){for(var a=document.querySelectorAll("[data-target]"),b={$jscomp$loop$prop$i$1:0};b.$jscomp$loop$prop$i$1<a.length;b={$jscomp$loop$prop$i$1:b.$jscomp$loop$prop$i$1},b.$jscomp$loop$prop$i$1++)a[b.$jscomp$loop$prop$i$1].addEventListener("click",
function(b){return function(){scrollTo(a[b.$jscomp$loop$prop$i$1].dataset.target)}}(b))},scrollTo=function(a){document.querySelector(a).scrollIntoView({block:"start",behavior:"smooth"})};
function validateMail(a){a.preventDefault();document.querySelector(".contactForm");a=document.querySelector('[name="name"]').value;var b=document.querySelector('[name="email"]').value,c=document.querySelector('[name="serviceType"]').value,d=document.querySelector('[name="message"]').value;""==a?alertAndFocus('[name="name"]',"El Nombre es obligatorio"):""==b?alertAndFocus('[name="email"]',"El correo es obligatorio"):regValidation(b,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)?alertAndFocus('[name="email"]',
"Formato de correo incorrecto"):""==c?alertAndFocus('[name="serviceType"]',"El tipo de servicio es obligatorio"):""==d?alertAndFocus('[name="message"]',"El mensaje es obligatorio"):(a=$("form").serialize(),$.post("php/mail/send_mail",a,function(a){switch(String(a).trim()){case "mailSent":alert("Correo enviado exitosamente");break;case "captchaError":alert("No se valid\u00f3 el captcha correctamente");break;default:alert("No se pudo enviar el formulario, por favor intenta nuevamente."),window.location.reload()}}));
return!1}function alertAndFocus(a,b){document.querySelector(a).focus();alert(b)}function regValidation(a,b){return 0==b.test(a)?!0:!1};


var map;
      function initMap() {
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }