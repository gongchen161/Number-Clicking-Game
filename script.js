
var btn = [];
var len = 16;
var play;

var flag = new Array(100, false);
var ans = [];
var curTerm = 0;
var done = false;

function init() {
	curTerm = 0;
	done = false;
	ans = []
	flag = new Array(100, false);
	for (var i = 0; i<len; i++) {
		btn[i] = document.getElementById("btn"+i);

		var cur = Math.floor(Math.random() * 100);
		while (flag[cur]) {
			cur = Math.floor(Math.random() * 100);
		}
		flag[cur] = true;
		btn[i].innerHTML = cur;
		ans.push(cur);

		btn[i].onclick = function() {
			if (this.innerHTML == ans[curTerm]) {
				this.innerHTML = "X";
				curTerm++;

				if (curTerm == 16) {
					alert("You Won");
				}
			} else {
				alert(ans[curTerm]);
			}
		}
	}

	ans.sort(function(a, b){return a - b});
}

play.onclick = function() {
		init();
}
