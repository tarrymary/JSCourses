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
	},
	//c
	mid: function() {
		return this.sum()/this.arrWorker.length;
	},
	//c
	minmax: function() {
		var sorted = this.sort();
		return {
			max: sorted[0],
			min: sorted[this.arrWorker.length - 1]
		}
	},

	//d 	Раскидываю всех работников в новые массивы по отделам
	sortDep: function() {
		var departaments = [[],[],[],[]]
			
		
		this.arrWorker.forEach(function(worker) {
			if(worker.departament == arrDep[0]) {
				departaments[0].push(worker);
			}

			if(worker.departament == arrDep[1]) {
				departaments[1].push(worker);
			}

			if(worker.departament == arrDep[2]) {
				departaments[2].push(worker);
			}

			if(worker.departament == arrDep[3]) {
				departaments[3].push(worker);
			}
		})
		return departaments;
	},

	//Средний возраст по отделам
	midAge: function() {
		return this.sortDep().map(function(otdel) {
			return otdel.length == 0 ? 0: otdel.reduce(function(prev, curr) {
				return curr.age + prev;
			}, 0) / otdel.length;
		}) 
	},

	//Средняя зп по отделу
	midPay: function() {
		return this.sortDep().map(function(otdel) {
			return otdel.length == 0 ? 0: otdel.reduce(function(prev, curr) {
				return curr.pay + prev;
			}, 0) / otdel.length;
		}) 
	},

	//Суммарная зп по отделам
	sumPay: function() {
		return this.sortDep().map(function(otdel) {
			return otdel.reduce(function(prev, curr) {
				return curr.pay + prev;
			}, 0)
		}) 
	},

	//Количество сотрудников в отделах
	depCount: function() {
		return this.sortDep().map(function(otdel) {
			return otdel.length;
		}) 
	},

	//Самый продолжительный срок
	exp: function() {
		return this.sortDep().map(function(otdel) {
			return otdel.sort(function(a, b) {
				return a.exp < b.exp ? 1: -1;
			})[0];
		})
	}

}


var arrName = ["Михаил", "Екатерина", "Владислав", "Антон", "Дарья", "Ангелина", "Елизавета", "Анастасия", "Артем", "Дмитрий", "Алексей"];
var arrDep = ["Расчётный отдел", "Материальный отдел", "Производственный отдел", "Общий отдел"];
var arrPay = [1000, 1500, 2000, 2500, 3000, 3500, 5000, 7000];


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

console.log(Bookkpng.mid());

console.log("Работники с максимальной и минимальной зарплатой");

var minmax = Bookkpng.minmax();

minmax.max.print();
minmax.min.print();

console.log("Средние возрасты работников по отделам");
console.log(Bookkpng.midAge());

console.log("Средние зарплаты по отделам");
console.log(Bookkpng.midPay());

console.log("Суммарные зарплаты по отделам");
console.log(Bookkpng.sumPay());

console.log("Количества работников в отделах");
console.log(Bookkpng.depCount());

console.log("Самые опытные работники");

Bookkpng.exp().forEach(function(human) {
	if (human) {
		human.print();
	}	
});