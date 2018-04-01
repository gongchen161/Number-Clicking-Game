
var btn = [];
var len = 16;

function init() {
	for (var i = 0; i<len; i++) {
		btn[i] = document.getElementById("btn"+i);
		btn[i].innerHTML = "XX";

		btn[i].onclick = function() {
			this.innerHTML = "CC";
		}
	}
}


window.onload = function() {
	init();
}
