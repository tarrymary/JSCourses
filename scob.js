var x=prompt("Введите строку");
var sum=0;

for(var i=0; i<x.length; i++) {
	if(x[i]=='('){
		sum++;
	}

	if(x[i]==')') {
		sum--;
	}
	
	if(sum<0) {
		break;
	}

	
}
	
if(sum==0 && i==x.length) {
		console.log("Скобки расставлены верно");
	}
else {
		console.log("Скобки расставлены не правильно");
	};