var d = new Date();
console.log(d);

function getNewDate(date) {
	var year =+ prompt("Введите текущий год");
	var month =+ prompt("Введите текущий месяц") - 1;
	var date =+ prompt("Введите сегодняшний день");
	var d1 = new Date(year, month, date, 23, 59, 59)
	return d1;
}

var d1 = getNewDate(d1);
console.log(d1);
var diff = (d1 - d)/60000;
console.log(diff);