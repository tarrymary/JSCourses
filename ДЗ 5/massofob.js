var obj = [];

var names = ["country", "population", "code", "flag"];
var countries = ["Австрия", "Норвегия", "Беларусь", "Латвия", "Германия", "Англия", "США"];
var populations = ["8.4 mln", "5.2 mln", "9.5 mln", "1.96 mln", "82 mln", "65 mln", "325 mln",];
var codes = ["+43", "+47", "+37", "+32", "+49", "+44", "+1"];
var flags = ["красный-белый-красный", "синий крест на красном фоне", "безвкусица", "бордовый-белый-бордовый", "schwarz-rot-gelb", "красные и белые кресты на синем фоне", "звезды и полоски"]

for (var i = 0; i < countries.length; i++) {
	obj.push({
		countrie: countries[i],
		population: populations[i],
		code: codes[i],
		flag: flags[i]
	});
};

var t = document.createElement("table");
var tbody = document.createElement("tbody");
document.body.appendChild(t);
t.appendChild(tbody);

for(var key in obj[0]) {
		var th = document.createElement("th");
		tbody.appendChild(th);	
		th.innerHTML = key;
}


for(var i = 0; i < countries.length; i++) {
	var tr = document.createElement("tr");
	tbody.appendChild(tr);
	for(var key in obj[i]) {
		var td = document.createElement("td");
		tr.appendChild(td);	
		td.innerHTML = obj[i][key];
	}
}








