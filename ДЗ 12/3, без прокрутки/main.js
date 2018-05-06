var btn = document.getElementById("btn");
var div = document.getElementById("div");

btn.addEventListener("click", function() {
	var xhr = new XMLHttpRequest;
	xhr.open("GET", "file.txt", true);
	xhr.onload = function() {
		div.innerHTML = this.responseText;
	}
	xhr.send(null);
});

