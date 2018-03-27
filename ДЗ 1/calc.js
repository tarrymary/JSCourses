var a=+prompt("Введите a");
var x=prompt("Введите операцию");
var b=+prompt("Введите b");

var itog;

switch(x) {
  case '+':
    itog=a+b;
    console.log(itog);
    break;
    
  case '-':  
    itog=a-b;
    console.log(itog);
    break;
    
  case '*':  
    itog=a*b;
    console.log(itog);
    break;
    
  case '/':  
    itog=a/b;
    console.log(itog);
    break;
	  
  case '%':  
    itog=a%b;
    console.log("Остаток от деления =", itog);
    break;
}
