var tbody = document.getElementById("tbody");

var num = 1;
var i = setInterval (function() {
	var tr = document.createElement("tr");
	tbody.appendChild(tr);
	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerHTML = num++  ;
	var td2 = document.createElement("td");
	tr.appendChild(td2);
	td2.innerHTML = "<button id = 'button'> x</button>";
}, 1000)

var button = document.getElementById("button");

tbody.addEventListener("click", function(e) {
	if (e.target.nodeName === "BUTTON") {
		var n = e.target.parentNode.parentNode;
		n.remove();
	}
});