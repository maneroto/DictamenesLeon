Element.prototype.slider = function(options = {}) {
	let animations = '@keyframes appear{ 0%{ opacity: 0;} 50%{ opacity: 0.5; } 100% { opacity: 1; } }';
	const constructor = (options) =>
	{
		options.sliderItemName = options.sliderItemName || '.sliderItem';
		options.auto = options.auto || false;
		options.autoDuration = options.autoDuration || 3;
		options.butonsPrevNext = options.butonsPrevNext || '.sliderButtonPrev, .sliderButtonNext';
		options.butonsIndicators = options.butonsIndicators || false;
		options.animation = 'appear' || false;
		options.callback = options.callback || false;

		return options;
	}; options = constructor(options);

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
		currentSlide = slide;

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
		if(options.butonsIndicators)
		{
			let sliderButtonsIndicators = this.querySelectorAll(options.butonsIndicators);
			for (let j = 0; j < sliderButtonsIndicators.length; j ++)
			{
				sliderButtonsIndicators[j].classList.remove('active');
			}
			sliderButtonsIndicators[slide].classList.add('active');
		}
		if (options.callback) options.callback(slide);
	}
	const setInputs = () => {
		if (options.butonsPrevNext)
		{
			for (let i = 0; i < sliderButtonsPrevNext.length; i ++)
				{
					sliderButtonsPrevNext[i].addEventListener('click', function()
					{
						nextSlide(parseInt(this.dataset.step, 10));
					});
				}
		}
		
		if(options.butonsIndicators)
		{
			let sliderButtonsIndicators = this.querySelectorAll(options.butonsIndicators);
			for (let i = 0; i < sliderButtonsIndicators.length; i ++)
			{
				sliderButtonsIndicators[i].addEventListener('click', function()
				{
					showSlide(parseInt(this.dataset.slidenumber, 10)-1);
				});
			}
		}
	}
	setInputs();
	showSlide();
	animations = '<style>' + animations + '</style>';
	document.querySelector('head').innerHTML += animations;
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

	this.style.display = 'block';
	let transition = 'appear '+options.duration + ' cubic-bezier(.57,.21,.69,1.25) forwards';
	this.style.animation = transition;
}

Element.prototype.fadeOut = function (options = {})
{
	const constructor = (options) =>
	{
		options.duration = options.duration || '0.5s';
		options.opacity = options.opacity || '0';

		return options;
	}; options = constructor(options);

	this.style.display = 'none';
	this.style.opacity = 0;
}

NodeList.prototype.slider = HTMLCollection.prototype.slider = function(options) {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i]) {
            this[i].slider(options);
        }
    }
}