var workMinutes = 20;
var breakMinutes = 5;

var minutes = workMinutes;
var seconds = 0;

var workBreak = "work";
var onOff = false;

var timer;

$('#workMinutes').html(workMinutes);
$('#breakMinutes').html(breakMinutes);

$('#display').html(minutes + " Minutes");

/**********************
ADD AND SUBSTRACT TIME
**********************/

var addWork = function() {
	workMinutes = workMinutes + 1;
	$('#workMinutes').html(workMinutes);
	minutes = workMinutes;
	$('#display').html(minutes + " Minutes");
}

var subWork = function() {
	if (workMinutes !== 0) {
		workMinutes = workMinutes - 1;
		$('#workMinutes').html(workMinutes);
		minutes = workMinutes;
		$('#display').html(minutes + " Minutes");
	}
}

var addBreak = function() {
	breakMinutes = breakMinutes + 1;
	$('#breakMinutes').html(breakMinutes);
}

var subBreak = function() {
	if (breakMinutes !== 0) {
		breakMinutes = breakMinutes - 1;
		$('#breakMinutes').html(breakMinutes);
	}
}

/**********************
CONTROLS + TIMERINTERVAL
**********************/

var startStop = function () {
	if (onOff === false) {
		startTimer();
}

var startTimer = function() {
	if (workBreak = "work") {
		onOff = true;
		timer = setInterval(workCountDown, 1000);
	} else if (workBreak = "break") {
		onOff = true;
		timer = setInterval(breakCountDown, 1000);
	}
}

var stopTimer = function() {
	clearInterval(timer);
	onOff = false;
}

var resetTimer = function() {
	minutes = workMinutes;
	seconds = 0;
	dDDisplay();
}

/**********************
WORK / BREAK SWAP
**********************/

function workCountDown() {
	console.log("workCountDown running");
	if (seconds == 0 && minutes > 0) {
		minutes--;
		seconds = 59;
	} else if (seconds == 0 && minutes == 0) {
		minutes = breakMinutes - 1;
		workBreak = "break";
		breakCountDown();
	}

	$('#display').css({'background-color' : 'tomato'});
	dDDisplay();
	seconds--;
}

function breakCountDown() {
	console.log("breakCountDown running");
	if (seconds == 0 && minutes > 0) {
		minutes--;
		seconds = 59;
	} else if (seconds == 0 && minutes == 0) {
		minutes = workMinutes - 1;
		workBreak = "work";
		workCountDown();
	}

	$('#display').css({'background-color' : 'greenyellow'});
	dDDisplay();
	seconds--;
}

/**********************
DOUBLE DIGIT DISPLAY
**********************/

function dDDisplay() {
	if (minutes < 10 && seconds < 10 ) {
		$('#display').html("0" + minutes + " : 0" + seconds);
	} else if (minutes < 10) {
		$('#display').html("0" + minutes + " : " + seconds);
	} else if (seconds < 10) {
		$('#display').html(minutes + " : 0" + seconds);
	} else {
		$('#display').html(minutes + " : " + seconds);
	}
}