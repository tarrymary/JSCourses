var n =+ prompt("Введите n");
var arr = new Array(n);


arr.fill(0);  

console.log("Массив из 0", arr);



var arr = arr.map(function(elem) {
  return elem+Math.round(100*Math.random());
});

console.log("Массив из рандомных чисел от 0 до 100", arr);



var arr = arr.map(function(elem){
	return elem%22;
});

console.log("Массив из остатков от деления на 22", arr);



var arr = arr.filter(function(elem) {
	return elem !== 5 && elem !== 12 && elem !== 21;
});

console.log("Массив без чисел 5, 12 и 21", arr);



var arr = arr.sort(function(a,b) {
	return a%5 > b%5 ? 1 : -1;
});

console.log("Массив, отсортированный по отстаткам от деления элементов на 5", arr);



var res = arr.reduce(function(prev, curr) {
	return (1/curr) + prev;
});

var H = arr.length/res;

console.log("Среднее гармоническое:", H);