var p=+prompt("Введите p");
var x=+prompt("Введите x");


function randArr (count) {
	var arr = [];
	for(var i = 0; i < count; i++) {
		arr[i] = Math.round(1 + 9*Math.random());
	}
	return arr;
}


var arr = randArr(p);
console.log(arr);

function solution(arr, x) {
	var otv = 0;
	for(var i = 0; i < p; i++) {
		otv += arr[i]*(x**i);
	}
	return otv;
}


var otv = solution(arr, x);

console.log(otv);

