
var btn = [];
var len = 16;
var play;

var flag = new Array(100, false);
var ans = [];

function init() {
	for (var i = 0; i<len; i++) {
		btn[i] = document.getElementById("btn"+i);

		var cur = Math.floor(Math.random() * 100);
		while (flag[cur]) {
			cur = Math.floor(Math.random() * 100);
		}
		flag[cur] = true;
		btn[i].innerHTML = cur;
	}
}


window.onload = function() {
	init();
	play = document.getElementById("play");
}

play.onclick = function() {
		init();
}
