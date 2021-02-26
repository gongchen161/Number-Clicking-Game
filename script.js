let btn = [];
let play;
let len = 16;

let flag = new Array(100, false);
let ans = [];
let curTerm = 0;
let done = false;

let bn = document.getElementById("btns").getElementsByTagName("button");
let py = document.getElementById("btnPlay"); 
let timer = document.getElementById("timer"); 
function adjustButtonSize() {
	for(let i = 0; i < len; i++) {
		bn[i].style.height = bn[0].clientWidth + "px";
		bn[i].style.fontSize = bn[0].offsetWidth*0.5 + "px";
	}
	py.style.width = bn[0].clientWidth * 2 + "px";
	py.style.height = bn[0].clientWidth * 0.8 + "px";
	py.style.fontSize = bn[0].clientWidth * 0.5 + "px";
	py.style.textAlign = "center";
}

window.onload = adjustButtonSize;
document.addEventListener('DOMContentLoaded', adjustButtonSize, false);
window.addEventListener("resize", adjustButtonSize, false);
window.onload = adjustButtonSize;
let timerInterval = null;
function init() {
	if(timerInterval != null) {
		clearInterval(timerInterval);
	}
	timerInterval = null;
	flag = new Array(100, false);
	ans = []
	curTerm = 0;
	done = false;
	for (let i = 0; i<len; i++) {
		btn[i] = document.getElementById("btn"+i);

		let cur = Math.floor(Math.random() * 100);
		while (flag[cur]) {
			cur = Math.floor(Math.random() * 100);
		}
		btn[i].innerHTML = cur;
		btn[i].style.background = '';
		flag[cur] = true;
		ans.push(cur);
	}

	ans.sort(function(a, b){return a - b});
	timer.innerHTML=0
}

function clearField() {
	for (let i = 0; i<len; i++) {
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
	for (let i = 0; i<len; i++) {
		if (btn[i].innerHTML == ans[curTerm]) {
			btn[i].style.background = '#FF0000';
		}
	}
	timer.innerHTML += "     Game Over" 
}



play = document.getElementById("play");
play.onclick = function() {
	init();
	let value = 0;
	timerInterval = setInterval(() => {
		value++;
		timer.innerHTML = (Math.round(value) / 10).toFixed(1);
	}, 100);
}

for (let i = 0; i<len; i++) {
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
		if(done && timerInterval != null) {
			clearInterval(timerInterval);
		}
	}
}

