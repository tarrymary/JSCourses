var i = setInterval(function() {
	window.scrollBy(0, 20);
	if(window.innerHeight + window.scrollY === 10000) {
		clearInterval(i)
	}
}, 40)