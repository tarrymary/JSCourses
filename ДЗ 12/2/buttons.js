var btn = document.getElementById("btn");
var div = document.getElementById("div")
var div2 = document.getElementById("div2")

btn.addEventListener("click", function() {
	div.innerHTML = "loading...";
	var xhr = new XMLHttpRequest;
	xhr.open("GET", "form.txt", true);
	xhr.onload = function() {
		div.innerHTML = this.responseText;
		var inp = document.getElementById("button");
		var text = document.getElementById("text");
		inp.addEventListener("click", function() {
			var n = text.value;
			div2.innerHTML = n;
		});
	}
	xhr.send(null);
})