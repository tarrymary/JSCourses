var n =+ prompt("Введите n");

var t = document.createElement("table");
var tbody = document.createElement("tbody");

document.body.appendChild(t);

t.appendChild(tbody);

for(var i = 1; i <= n; i++) {
	var tr = document.createElement("tr");
	tbody.appendChild(tr);
	for(var j = 1; j <= n; j++) {
		var td = document.createElement("td");
		tr.appendChild(td);
	}
}



function getRandInt(min, max) {
	return Math.ceil(min + (max + 1 - min)*Math.random());
}


function getRandomColor() {
	var red = getRandInt(0, 255);
	var green = getRandInt(0, 255);
	var blue = getRandInt(0, 255);

	return "rgb(" + red + "," + green + "," + blue + ")";
}



t.addEventListener("mouseover", function(e) {
	if(e.target.nodeName === "TD") {
		e.target.style.backgroundColor = getRandomColor();
	}
});


t.addEventListener("mouseout", function(e) {
	if(e.target.nodeName === "TD") {
		e.target.style.backgroundColor = "#ffffff";
	}
});	


