
var btn = [];
var play;
var len = 16;

var flag = new Array(100, false);
var ans = [];
var curTerm = 0;
var done = false;

function init() {
	flag = new Array(100, false);
	ans = []
	curTerm = 0;
	done = false;
	for (var i = 0; i<len; i++) {
		btn[i] = document.getElementById("btn"+i);

		var cur = Math.floor(Math.random() * 100);
		while (flag[cur]) {
			cur = Math.floor(Math.random() * 100);
		}
		flag[cur] = true;
		btn[i].innerHTML = cur;
		ans.push(cur);
	}

	ans.sort(function(a, b){return a - b});
}


play = document.getElementById("play");
play.onclick = function() {
	init();
}

for (var i = 0; i<len; i++) {
	btn[i] = document.getElementById("btn"+i);

	btn[i].onclick = function() {
		if (done) {
			alert("Click PLAY to play again");
			return;
		}
		if (this.innerHTML == ans[curTerm]) {
			this.innerHTML = "X";
			curTerm++;

			if (curTerm == 16) {
				alert("You Won");
				done = true;
			}
		} else {
			alert(ans[curTerm] + " is the next. You lose");
			done = true;
		}
	}
}

