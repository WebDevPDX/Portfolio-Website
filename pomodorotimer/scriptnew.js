var workMinutes = 20;
var breakMinutes = 5;
var minutes = workMinutes;
var seconds = minutes * 60;
var workTimer = true;
var onOff = false;
var stopped = false;
var timer;
var displayTimeMinutes;
var displayTimeSeconds;

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

var startStop = function() {
	if (onOff === false) {
		startTimer(); 
	}
}

var startTimer = function() {
	if (!stopped) {
		if (workTimer) {
			clearInterval(timer);
			$('#display').css({'background-color' : 'tomato'});
			seconds = workMinutes * 60;
			onOff = true;
			timer = setInterval(workCountDown, 1000);
		} else {
			clearInterval(timer);
			onOff = true;
			$('#display').css({'background-color' : '#358F51'});
			seconds = breakMinutes * 60;
			timer = setInterval(breakCountDown, 1000);
		}
	}else if (stopped) {
		if (workTimer) {
			clearInterval(timer);
			$('#display').css({'background-color' : 'tomato'});
			onOff = true;
			timer = setInterval(workCountDown, 1000);
			stopped = false;
		} else {
			onOff = true;
			clearInterval(timer);
			$('#display').css({'background-color' : '#358F51'});
			timer = setInterval(breakCountDown, 1000);
			stopped = false;
		}
	}
}

var stopTimer = function() {
	clearInterval(timer);
	onOff = false;
	stopped = true;
}

var resetTimer = function() {
	minutes = workMinutes;
	seconds = minutes *60;
	workTimer = true;
	converterToMinutes();
	$('#display').css({'background-color' : '#0C0E33'});
}

/**********************
WORK / BREAK SWAP
**********************/

function workCountDown() {
	
	if (seconds > 0) {
		seconds--;
	} else if (seconds == 0) {
		workTimer = false;
		startTimer();
	}
	converterToMinutes();
}

function breakCountDown() {
	if (seconds > 0) {
		seconds--;
	} else if (seconds == 0) {
		workTimer = true;
		startTimer();
	}
	converterToMinutes();
}

/**********************
DOUBLE DIGIT DISPLAY
**********************/

function dDDisplay() {
	if (displayTimeMinutes < 10 && displayTimeSeconds < 10 ) {
		$('#display').html("0" + displayTimeMinutes + " : 0" + displayTimeSeconds);
	} else if (displayTimeMinutes < 10 && displayTimeSeconds > 10) {
		$('#display').html("0" + displayTimeMinutes + " : " + displayTimeSeconds);
	} else if (displayTimeMinutes > 10 && displayTimeSeconds < 10) {
		$('#display').html(displayTimeMinutes + " : 0" + displayTimeSeconds);
	} else {
		$('#display').html(displayTimeMinutes + " : " + displayTimeSeconds);
	}
}

/**********************
CONVERTER
**********************/

var converterToMinutes = function() {
	displayTimeMinutes = parseInt(seconds / 60);
	displayTimeSeconds = seconds % 60;
	dDDisplay();
}

/**********************
ON LOAD
**********************/

$('#workMinutes').html(workMinutes);
$('#breakMinutes').html(breakMinutes);
$('#display').html(minutes + " Minutes");