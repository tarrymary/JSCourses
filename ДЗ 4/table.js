document.write(
	"<table border = 5px>"+
		"<tr>"+
			"<td>"+"Ширина экрана"+"</td>"+
			"<td>"+screen.width+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Высота экрана"+"</td>"+
			"<td>"+screen.height+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Полезная ширина экрана"+"</td>"+
			"<td>"+screen.availWidth+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Полезная высота экрана"+"</td>"+
			"<td>"+screen.availHeight+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Высота окна браузера"+"</td>"+
			"<td>"+window.innerHeight+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Ширина окна браузера"+"</td>"+
			"<td>"+window.innerWidth+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Качество цветопередачи"+"</td>"+
			"<td>"+screen.colorDepth+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"App Code Name"+"</td>"+
			"<td>"+navigator.appCodeName+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"App Name"+"</td>"+
			"<td>"+navigator.appName+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"User Agent"+"</td>"+
			"<td>"+navigator.userAgent+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Куки вкл?"+"</td>"+
			"<td>"+navigator.cookieEnabled+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Подключен к сети?"+"</td>"+
			"<td>"+navigator.onLine+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"URL"+"</td>"+
			"<td>"+location.href+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"hash"+"</td>"+
			"<td>"+location.hash+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"host"+"</td>"+
			"<td>"+location.host+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Номер порта"+"</td>"+
			"<td>"+location.port+"</td>"+
		"</tr>"+
		"<tr>"+
			"<td>"+"Протокол"+"</td>"+
			"<td>"+location.protocol+"</td>"+
		"</tr>"+
	"</table>"
);
