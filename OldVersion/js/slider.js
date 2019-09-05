Element.prototype.slider = function(options = {}) {

	const constructor = (options) =>
	{
		options.sliderItemName = options.sliderItemName || '.sliderItem';
		options.auto = options.auto || false;
		options.autoDuration = options.autoDuration || 3;
		options.butonsPrevNext = options.butonsPrevNext || '.sliderButtonPrev, .sliderButtonNext';

		return options;
	}; options = constructor(options);
	console.log(options);

	var currentSlide = 0;
	var sliderItems = this.querySelectorAll(options.sliderItemName);
	var timeout = '';

	if(!sliderItems[0]) return;

	var sliderItemWidth = sliderItems[0].style.width;
	var sliderButtonsPrevNext = this.querySelectorAll(options.butonsPrevNext);

	const nextSlide = (steps = 1) => {
		currentSlide += steps;
		if (currentSlide < 0) currentSlide = sliderItems.length-1;
		if (currentSlide >= sliderItems.length) currentSlide = 0;
		showSlide();
	}
	const showSlide = (slide = currentSlide) => {

		for(let i = 0; i < sliderItems.length; i ++)
		{
			sliderItems[i].fadeOut();
		}
		sliderItems[currentSlide].fadeIn();

		if (options.auto) 
		{
			clearTimeout(timeout);
			timeout = setTimeout(function(){ nextSlide()}, parseInt(options.autoDuration * 1000, 10));
		}
	}
	const setInputs = () => {
		for (let i = 0; i < sliderButtonsPrevNext.length; i ++)
		{
			sliderButtonsPrevNext[i].addEventListener('click', function()
			{
				console.log(this + 'clicked');
				nextSlide(parseInt(this.dataset.step, 10));
			});
		}
		console.log('Inputs ready');
	}
	setInputs();
	showSlide();
}
Element.prototype.widthEaseIn = function(options = {})
{
	const constructor = (options) =>
	{
		options.duration = options.duration || '0.3s';
		options.width = options.whidth || '100%';
		options.height = options.height || '100%';

		return options;
	}; options = constructor(options);

	let transition = options.duration + ' width ease-in';
	this.style.transition = transition;
	this.style.overflow = 'hidden';
	this.style.width = options.width;
	this.style.height = options.height;
}
Element.prototype.widthEaseOut = function(options = {})
{
	const constructor = (options) =>
	{
		options.duration = options.duration || '0.3s';
		options.width = options.whidth || '0';
		options.height = options.height || '0';

		return options;
	}; options = constructor(options);

	let transition = options.duration + ' width ease-out';
	this.style.transition = transition;
	this.style.overflow = 'hidden';
	this.style.width = options.width;
	this.style.height = options.height;
}

Element.prototype.heightEaseIn = function(options = {})
{
	const constructor = (options) =>
	{
		options.duration = options.duration || '0.3s';
		options.width = options.whidth || '100%';
		options.height = options.height || '100%';

		return options;
	}; options = constructor(options);

	let transition = options.duration + ' height ease-in';
	this.style.transition = transition;
	this.style.overflow = 'hidden';
	this.style.width = options.width;
	this.style.height = options.height;
}
Element.prototype.heightEaseOut = function(options = {})
{
	const constructor = (options) =>
	{
		options.duration = options.duration || '0.3s';
		options.width = options.whidth || '0';
		options.height = options.height || '0';

		return options;
	}; options = constructor(options);

	let transition = options.duration + ' height ease-out';
	this.style.transition = transition;
	this.style.overflow = 'hidden';
	this.style.width = options.width;
	this.style.height = options.height;
}

Element.prototype.fadeIn = function (options = {})
{
	const constructor = (options) =>
	{
		options.duration = options.duration || '0.5s';
		options.opacity = options.opacity || '1';

		return options;
	}; options = constructor(options);

	let transition = options.duration + ' opacity cubic-bezier(.57,.21,.69,1.25)';
	this.style.transition = transition;
	this.style.overflow = 'hidden';
	this.style.opacity = options.opacity;
}

Element.prototype.fadeOut = function (options = {})
{
	const constructor = (options) =>
	{
		options.duration = options.duration || '0.5s';
		options.opacity = options.opacity || '0';

		return options;
	}; options = constructor(options);

	let transition = options.duration + ' opacity cubic-bezier(.57,.21,.69,1.25)';
	this.style.transition = transition;
	this.style.overflow = 'hidden';
	this.style.opacity = options.opacity;
}

NodeList.prototype.slider = HTMLCollection.prototype.slider = function(options) {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i]) {
            this[i].slider(options);
        }
    }
}