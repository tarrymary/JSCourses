var arrName = ["Миша", "Катя", "Слава", "Антон", "Даша", "Ангелина"];
var arrTown = ["Минск", "Лондон", "Рим", "Брест"];

function randElemofArray(arr) {
	var randElem = arr[Math.floor(arr.length*Math.random())];
	return randElem;
}

randElemofArray(arrName);
randElemofArray(arrTown);

var arrHuman = [];

for(var i = 0; i < 15; i++) {
	arrHuman.push(
		{
			name: randElemofArray(arrName), 
			age: Math.round(1+99*Math.random()), 
			town: randElemofArray(arrTown),
			print: function() {
				console.log("Имя:", this.name, ", Возраст:", this.age, ",", this.town);
			}
		}
	);
}

arrHuman.forEach(function(human) {
	human.print();
});