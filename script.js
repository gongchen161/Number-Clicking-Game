
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
		btn[i].innerHTML = cur;
		btn[i].style.background = '';
		flag[cur] = true;
		ans.push(cur);
	}

	ans.sort(function(a, b){return a - b});
}

function clearField() {
	for (var i = 0; i<len; i++) {
		btn[i].innerHTML = "";
	}
}


function displayWin() {
	clearField();
	btn[0].innerHTML = "Y";
	btn[1].innerHTML = "O";
	btn[2].innerHTML = "U";

	btn[8].innerHTML = "W";
	btn[9].innerHTML = "O";
	btn[10].innerHTML = "N";
	btn[11].innerHTML = "!";

	btn[0].style.background = '#FF0000';
	btn[1].style.background = '#FF0000';
	btn[2].style.background = '#FF0000';
	btn[8].style.background = '#FF0000';
	btn[9].style.background = '#FF0000';
	btn[10].style.background = '#FF0000';
	btn[11].style.background = '#FF0000';

}

function displayLose() {
	for (var i = 0; i<len; i++) {
		if (btn[i].innerHTML == ans[curTerm]) {
			btn[i].style.background = '#FF0000';
		}
	}
	
}



play = document.getElementById("play");
play.onclick = function() {
	init();
}

for (var i = 0; i<len; i++) {
	btn[i] = document.getElementById("btn"+i);

	btn[i].onclick = function() {
		if (done) {
			return;
		}
		if (this.innerHTML == ans[curTerm]) {
			this.innerHTML = "X";
			curTerm++;

			if (curTerm == 16) {
				displayWin();
				done = true;
			}
		} else {
			this.style.background = '#00FF00';
			displayLose();
			done = true;
		}
	}
}

