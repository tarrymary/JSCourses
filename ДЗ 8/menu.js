var menu = document.getElementById("context");


document.addEventListener("contextmenu", function(e) {
	var X = event.clientX;
	var Y = event.clientY;
	menu.classList.add("context");
	e.preventDefault();
	menu.getBoundingClientRect()
	if(X >  window.innerWidth - menu.clientWidth) {
		X = X - menu.clientWidth;
	}

	if(Y > window.innerHeight - menu.clientHeight) {
		Y = Y - menu.clientHeight;
	}
	menu.style.left = X + "px";
	menu.style.top = Y + "px"; 
});

document.addEventListener("click", function() {
	menu.classList.remove("context");
});


