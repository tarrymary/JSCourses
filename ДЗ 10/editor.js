var boldBtn = document.getElementById("bold");

boldBtn.addEventListener("click", function(e) {
	document.execCommand("bold", false, null);
});

var italicBtn = document.getElementById("italic");

italicBtn.addEventListener("click", function(e) {
	document.execCommand("italic", false, null);
});

var underBtn = document.getElementById("underline");

underBtn.addEventListener("click", function(e) {
	document.execCommand("underline", false, null);
});

var strikeBtn = document.getElementById("strike");

strikeBtn.addEventListener("click", function(e) {
	document.execCommand("strikeThrough", false, null);
});

var sizeBtn = document.getElementsByClassName("sizes");

var sizeBtnArr = Array.from(sizeBtn);

sizeBtnArr.forEach(function(item) { 
	item.addEventListener("click", function() {
		var n = item.innerText;
		document.execCommand("fontsize", false, n);
	});
});

var tcolorBtn = document.getElementsByClassName("colors");
var tcolorBtnArr = Array.from(tcolorBtn);

var colorsOfText = ["red", "green", "blue"];

tcolorBtnArr.forEach(function(item, i) { 
	item.addEventListener("click", function() {
		document.execCommand("forecolor", false, colors[i]);
	});
});


var backGroundColors = ["orangered", "lightgreen", "cyan"];
var bgcolorBtn = document.getElementsByClassName("bgcolors");
var bgcolorBtnArr = Array.from(bgcolorBtn);

bgcolorBtnArr.forEach(function(item, i) { 
	item.addEventListener("click", function() {
		document.execCommand("backcolor", false, backGroundColors[i]);
	});
});

var parBtn = document.getElementById("par");

parBtn.addEventListener("click", function() {
	document.execCommand("insertparagraph", false, null);
});

var listBtn = document.getElementById("list");

listBtn.addEventListener("click", function() {
	document.execCommand("insertorderedlist", false, null);
});

var linkBtn = document.getElementById("link");

linkBtn.addEventListener("click", function() {
	document.execCommand("createLink", false, "link.com");
});

var unlinkBtn = document.getElementById("unlink");

unlinkBtn.addEventListener("click", function() {
	document.execCommand("unlink", false, "link.com");
});

var imgBtn = document.getElementById("img");

imgBtn.addEventListener("click", function() {
	document.execCommand("insertimage", false, "https://png.icons8.com/color/160/cactus.png");
});

var delBtn = document.getElementById("del");

delBtn.addEventListener("click", function() {
	document.execCommand("delete", false, null);
});

var indBtn = document.getElementById("ind");

indBtn.addEventListener("click", function() {
	document.execCommand("indent", false, null);
});

var outBtn = document.getElementById("out");

outBtn.addEventListener("click", function() {
	document.execCommand("outdent", false, null);
});

var leftBtn = document.getElementById("left");

leftBtn.addEventListener("click", function() {
	document.execCommand("justifyleft", false, null);
});

var centerBtn = document.getElementById("center");

centerBtn.addEventListener("click", function() {
	document.execCommand("justifycenter", false, null);
});

var rightBtn = document.getElementById("right");

rightBtn.addEventListener("click", function() {
	document.execCommand("justifyright", false, null);
});

setInterval(function() { 						
	if(!document.queryCommandEnabled("bold")) {
		boldBtn.disabled = true;
		parBtn.disabled = true;
		listBtn.disabled = true;
		linkBtn.disabled = true;
		unlinkBtn.disabled = true;
		imgBtn.disabled = true;
		delBtn.disabled = true;
		indBtn.disabled = true;
		outBtn.disabled = true;
		leftBtn.disabled = true;
		centerBtn.disabled = true;
		rightBtn.disabled = true;
		italicBtn.disabled = true;
		underBtn.disabled = true;
		strikeBtn.disabled = true;
		sizeBtn.disabled = true;
	} else {
		boldBtn.disabled = false;
		parBtn.disabled = false;
		listBtn.disabled = false;
		linkBtn.disabled = false;
		unlinkBtn.disabled = false;
		imgBtn.disabled = false;
		delBtn.disabled = false;
		indBtn.disabled = false;
		outBtn.disabled = false;
		leftBtn.disabled = false;
		centerBtn.disabled = false;
		rightBtn.disabled = false;
		italicBtn.disabled = false;
		underBtn.disabled = false;
		strikeBtn.disabled = false;
		sizeBtn.disabled = false;
	}
	if(document.queryCommandState("bold")) {
		boldBtn.style.fontWeight = "bold";
	} else {
		boldBtn.style.fontWeight = "normal";
	}
	if(document.queryCommandState("italic")) {
		italicBtn.style.fontStyle = "italic";
	} else {
		italicBtn.style.fontStyle = "normal";
	}
	if(document.queryCommandState("underline")) {
		underBtn.style.textDecoration = "underline";
	} else {
		underBtn.style.textDecoration = "none";
	}
	if(document.queryCommandState("strikeThrough")) {
		strikeBtn.style.textDecoration = "line-through";
	} else {
		strikeBtn.style.textDecoration = "none";
	}
}, 100);