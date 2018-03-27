var x=+prompt("Введите x");
var n=+prompt("Введите n");


var fact=1;
for (var i=1; i<=n; i++) {
	fact*=i;
}

console.log(fact);

var fact2=1;
for (var i=1; i<=2*n; i++) {
	fact2*=i;
}

console.log(fact2);

var arcsin=((fact2)/((Math.pow(2, 2*n))*(Math.pow(fact, 2))*(2*n+1)))*(Math.pow(x, 2*n+1));

console.log(arcsin);