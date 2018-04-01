var number = prompt("Введите номер телефона");

var r = /\+?375[- ]?\(?(29|33|44|25)\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}/

console.log(number.match(r));

if (number.match(r) == null) {
	alert("Номер не валидный");
} else {
	alert("Номер валидный");
}




