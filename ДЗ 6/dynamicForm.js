var button1 = document.getElementById("button1");
button1.addEventListener("click", value1);

var form = document.getElementById("form");

var n = 1;

function value1() {
	
	var input = document.createElement("input");
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	form.appendChild(span1);
	span1.innerHTML = " + ";
	form.appendChild(input);
	form.appendChild(span2);
	span2.innerHTML ="x" + "^" + n++;	
}
	

var button2 = document.getElementById("button2");
button2.addEventListener("click", value2);

function value2() {
	var s = form.lastChild;
	var s1 = s.previousElementSibling;
	var s2 = s1.previousElementSibling; 
	s.remove();
	s1.remove();
	s2.remove();
	n--;
	if (n == 0) {
		form.innerHTML = "y = <input type = 'text'></input>"
		n++;
	}
}