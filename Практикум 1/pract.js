var slider = document.getElementById("slider");
var images = slider.getElementsByClassName("img")

var currentImagePos = 0;

images[currentImagePos].classList.add("visible");


var bullets = document.getElementsByClassName("bullets")[0];


for(var i = 0; i < images.length; i++) {
	var button = document.createElement("button");
	button.classList.add("bulletsItem");
	button.innerHTML = i+1;
	bullets.appendChild(button);
}

bullets.children[currentImagePos].classList.add("bulletsItemColor");

bullets.addEventListener("click", function(e) {
	if(e.target.nodeName === "BUTTON") {
		bullets.children[currentImagePos].classList.remove("bulletsItemColor");
		images[currentImagePos].classList.remove("visible");
		currentImagePos = (+e.target.innerHTML-1);
		images[currentImagePos].classList.add("visible");
		e.target.classList.add("bulletsItemColor");
	}
});

var buttons = document.getElementsByClassName("button");

buttons[1].addEventListener("click", function(e) {
	bullets.children[currentImagePos].classList.remove("bulletsItemColor");
	images[currentImagePos].classList.remove("visible");
	currentImagePos = (currentImagePos + 1) % images.length;
	images[currentImagePos].classList.add("visible");
	bullets.children[currentImagePos].classList.add("bulletsItemColor");
});

buttons[0].addEventListener("click", function() {
	bullets.children[currentImagePos].classList.remove("bulletsItemColor");
	images[currentImagePos].classList.remove("visible");
	if (currentImagePos === 0) {
		currentImagePos = images.length - 1;
	} else {
		currentImagePos = (currentImagePos - 1)%images.length;
	}
	images[currentImagePos].classList.add("visible");
	bullets.children[currentImagePos].classList.add("bulletsItemColor");
}); 


