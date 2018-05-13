var div = document.getElementById("tests");
var test = document.getElementById("test");

var xhr = new XMLHttpRequest();
xhr.open("GET", "tests.json", true);
xhr.onload = function() {
	var json = JSON.parse(this.responseText);
	onDataReceive(json);
}
xhr.send(null);

var result = 0;


function appendQuestion (questions, questionNumber) {
	test.innerHTML = "";
	var header = document.createElement("h3");
	header.setAttribute("class", "header");
	var answers = document.createElement("ul");
	questions[questionNumber].answers.forEach(function(answer) {
		var li = document.createElement("li");
		li.setAttribute("class", "answers");
		var text = document.createTextNode(answer);
		li.appendChild(text);
		answers.appendChild(li);
		li.addEventListener("click", function() {
			if (answer === questions[questionNumber].correct) {
				result++;
			};
			if (questionNumber + 1 === questions.length) {
				test.innerHTML = "";
				var res = document.createElement("div");
				test.appendChild(res);
				var text = document.createTextNode("Тест окончен. Ваш результат: " + result);
				res.appendChild(text);
				res.setAttribute("class", "result");
			} else {
				appendQuestion(questions, questionNumber + 1);
			};			
		});
	});
	var h = document.createTextNode(questions[questionNumber].title);
	header.appendChild(h);
	test.appendChild(header);
	test.appendChild(answers);
}

function onDataReceive (data) {
	data.forEach(function(item) {
		div.innerHTML +=  "<div class='test__item'>" 
		+ "<img src = '" + item.img + "' class='tests__images'>"
		+ "<h3 class='title'>" + item.name + "</h3>" 
		+ "<p>" + item.description + "</p>"
		+ "<p> Время на тест: " + "<b>" + item.time + "</b>" + "</p>" + "</div>";
	});

	var divs = document.getElementsByClassName("test__item");
	var containers = Array.from(divs);

	containers.forEach(function(item, i) { 
		item.addEventListener("click", function() {
			test.setAttribute("class", "test");
			var xhr2 = new XMLHttpRequest();
			xhr2.open("GET", data[i].file, true);
			xhr2.onload = function() {
				var questions = JSON.parse(this.responseText);
				result = 0;
				appendQuestion(questions, 0);
			}
			xhr2.send(null);
		});
	});
}