 var div = document.getElementById("elem");


var timer = setInterval(function() {
	var now = new Date();
 	var end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

 	function diff() {
	 	diffHourse = (end - now)/3600000 % 24;
	 	diffMinutes = (end - now)/60000 % 60;
	 	diffSeconds = (end - now)/1000 % 60 + 1;
	 	return {
	 		hourse: diffHourse,
	 		minuter: diffMinutes,
	 		seconds: diffSeconds
	 	};
 	}
 	diff();

 	diffTime = new Date (now.getFullYear(), now.getMonth(), now.getDate(), diffHourse, diffMinutes, diffSeconds);

 	if(diffTime.getSeconds() < 10) {
		var nu = "0";
	}
	else {
		nu = "";
	}

	if(diffTime.getMinutes() < 10) {
		var n = "0";
	}
	else {
		n = "";
	}

	div.innerHTML = diffTime.getHours() + ":"  +  n + diffTime.getMinutes() + ":" + nu + diffTime.getSeconds();
}, 1000);