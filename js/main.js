var masthead
	, slides
	, buttons
	, contents
	, container
	, i
	, k;

// Masthead Slider

masthead = document.querySelector(".mh-image");

slides = [
    "<figure class= \"picture\"><img src=\"./img/windmill.png\" alt=\"Windmill image\"><figcaption class=\"leg\"> WINDMILL</figcaption></figure>"
    , "<figure class= \"picture\"><img src=\"./img/solar-panel.png\" alt=\"Solar Panel image\"><figcaption class=\"leg\"> SOLAR PANEL</figcaption></figure>"
    , "<figure class= \"picture\"><img src=\"./img/geothermal.png\" alt=\"Geothermal Energy image\"><figcaption class=\"leg\"> GEOTHERMAL PLANT</figcaption></figure>"
    , "<figure class= \"picture\"><img src=\"./img/hydroeletricity.png\" alt=\"Hydroelectricity dam image\"><figcaption class=\"leg\"> HYDROELECTRICITY DAM </figcaption></figure>"
	, "<figure class= \"picture\"><img src=\"./img/car-electric.png\" alt=\"Electric Car image\"><figcaption class=\"leg1\"> ELECTRIC CAR </figcaption></figure>"
];

function fadeOut() {
	"use strict";
	masthead.style.opacity = 0;
}

i = 0;

function runSlides() {
	"use strict";
	
	masthead.style.opacity = 1;
	
	if (i > slides.length - 1) {
		i = 0;
	}
	
	masthead.innerHTML = slides[i];
	i += 1;
	window.setTimeout(fadeOut, 5000);
}

runSlides();

window.setInterval(runSlides, 6000);

//Content Manipulation

contents = [
    "<figure><img src=\"./img/car.png\" alt=\"Electric Car image\" class=\"main-content\"><figcaption class=\"text\" >If you've been looking for an excuse to get out of your old, smelly, oil-burning car, I'm about to give you seven. These seven electric cars are exciting, high-tech, and best of all, affordable.<span><a href=\"http://www.businessinsider.com/7-most-affordable-electric-cars-in-america-2016-3\" target=\"_blank\"><strong>  more </strong></a></span></figcaption></figure>"
    , "<figure><img src=\"./img/wind.png\" alt=\"Wind mill image\" class=\"main-content\"><figcaption class=\"text\">Wind energy is the cheapest form of new electricity generation available today. Wind power is more expensive than power from old, established power plants, but is cost competitive with any new power plant. <span><a href=\"http://www.windustry.org/resources/wind-energy-expensive\" target=\"_blank\"><strong>  more</strong></a></span></figcaption></figure>"
    , "<figure><img src=\"./img/panel.png\" alt=\"solar Panel image\" class=\"main-content\"><figcaption class=\"text\">A transformation is happening in global energy markets that’s worth noting as 2016 comes to an end: Solar power, for the first time, is becoming the cheapest form of new electricity.<span><a href=\"https://www.bloomberg.com/news/articles/2016-12-15/world-energy-hits-a-turning-point-solar-that-s-cheaper-than-wind\" target=\"_blank\"><strong>  more</strong></a></span></figcaption></figure>"
];

container = document.querySelector(".container");
buttons = document.querySelectorAll("button");

function handleClick(ev) {
	"use strict";
	
	for (k = 0; k < buttons.length; k += 1) {
		
		if (buttons[k].hasAttribute("id")) {
			buttons[k].removeAttribute("id");
		}
		if (ev.target === buttons[k]) {
			container.innerHTML = contents[k];
		}
	}
	ev.target.setAttribute("id", "active");
}

for (k = 0; k < buttons.length; k += 1) {
	buttons[k].addEventListener("click", handleClick, false);
}