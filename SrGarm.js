var n =+ prompt("Введите n");
var s =+ prompt("Введите s");
var p =+ prompt("Введите p");

var arr = new Array(n);

var x = s*p/100;

var sum=0;

for(var i = 0; i < arr.length; i++) {
	arr[i] = Math.round((s - x) + (2*x)*Math.random());
	sum += arr[i]**(-1);
}

console.log(arr);

var H = n/(sum);
console.log("Среднее гармоническое - ", H);

function sort(arr) {
	for (var i = 0; i < arr.length; i++) {
	for (var j = i + 1; j < arr.length; j++) {
		if (arr[i] < arr[j]) {
			var z = arr[i];
			arr[i] = arr[j];
			arr[j] = z;
		}
	}
}
	return arr;
}

var sortetArr=sort(arr);

console.log("Отсортированный массив - ", sortetArr);