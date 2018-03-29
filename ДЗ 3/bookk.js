var n =+ prompt("Введите количество работников");

var Bookkpng = {
	arrWorker:[],
	//a
	add: function() {
		this.arrWorker.push({
			name: randElemofArray(arrName),
			age: Math.round(20+30*Math.random()),
			departament: randElemofArray(arrDep),
			pay: randElemofArray(arrPay),
			exp: Math.round(1+119*Math.random()),
			print: function() {
				console.log("Новый сотрудник", this.name, ",", this.age, ",", this.departament, ",", this.pay, ",", this.exp);
				}
			}
		)
	},
	//b
	sum: function() {
		return this.arrWorker.reduce(function(prev, curr){
			return curr.pay + prev;
		}, 0);
	},
	//b
	sort: function() {
		return this.arrWorker.sort(function(a,b){
			return a.pay < b.pay ? 1: -1;
		})
	}
}


var arrName = ["Михаил", "Екатерина", "Владислав", "Антон", "Дарья", "Ангелина", "Елизавета", "Анастасия", "Артем", "Дмитрий", "Алексей"];
var arrDep = ["Расчётный отдел", "Материальный отдел", "Производственный отдел", "Общий отдел"];
var arrPay = [1000, 2000, 2500, 5000];


function randElemofArray(arr) {
	var randElem = arr[Math.floor(arr.length*Math.random())];
	return randElem;
}


for(var i = 0; i < n; i++) {
	Bookkpng.arrWorker.push({
		name: randElemofArray(arrName),
		age: Math.round(20+30*Math.random()),
		departament: randElemofArray(arrDep),
		pay: randElemofArray(arrPay),
		exp: Math.round(1+119*Math.random()),
		print: function() {
				console.log(this.name, ",", this.age, ",", this.departament, ",", this.pay, ",", this.exp);
			}
		}
	);
}

console.log("Все сотрудники");

Bookkpng.arrWorker.forEach(function(human) {
	human.print();
});       //Пропечатываю каждого сотрудника

Bookkpng.add(); //Вызываю функцию добавления нового сотрудника

console.log("Все сотрудники + 1 новый");

Bookkpng.arrWorker.forEach(function(human) {
	human.print();
});      //Пропечатываю каждого сотрудника еще раз

console.log("Средняя зарплата:", Bookkpng.sum());

Bookkpng.sort();   //Вызываю функцию сортировки работников по зарплате
console.log("Отсортированные работники");
Bookkpng.arrWorker.forEach(function(human) {
	human.print();
});
