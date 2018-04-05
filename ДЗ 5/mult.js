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
		td.innerHTML = i*j;
		if(i == j) {
			td.style.background = "lightgreen";
		}
	}
}




