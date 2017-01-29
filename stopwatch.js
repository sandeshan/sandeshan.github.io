/*
//Filename: stopwatch.js
//Author:     Sandesh Ashok Naik
//Contact:  sanaik@syr.edu
*/
var inputSec = 0;
var inputDays = 0, inputHours = 0, inputMinutes = 0, inputSeconds = 0;
var timeElapsed = 0, timeElapsedDown = 0;

var timeUp = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    clear = document.getElementById('clear'),
    days = 0, seconds = 0, minutes = 0, hours = 0,
    tUp;
    
var timeDown = document.getElementsByTagName('h2')[1],
    startDown = document.getElementById('startDown'),
    pauseDown = document.getElementById('pauseDown'),
    clearDown = document.getElementById('clearDown'),
    daysDown = 0, secondsDown = 0, minutesDown = 0, hoursDown = 0,
    tDown;

var set = document.getElementById('set');
var reset = document.getElementById('reset');

function countUp() {

        if (timeElapsed == inputSec) {
            clearTimeout(tUp);
            document.getElementById("start").disabled = true;
            document.getElementById("pause").disabled = true;
        
            days = 0; seconds = 0; minutes = 0; hours = 0;
        }
        else {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                    if (hours >= 24) {
                        hours = 0;
                        days++;
                    }
                }
            }

    timeElapsed++;
}
    
timeUp.textContent = (days ? (days > 9 ? days : "0" + days) : "00") + " days " + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + " hour " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " minutes " + (seconds > 9 ? seconds : "0" + seconds) + " seconds ";

timerUp();
}

function countDown() {

        if (timeElapsedDown == inputSec) {
            clearTimeout(tDown);
            document.getElementById("startDown").disabled = true;
            document.getElementById("pauseDown").disabled = true;
        
            daysDown = 0; secondsDown = 0; minutesDown = 0; hoursDown = 0;
        }
        else {
            if (secondsDown > 0)
                secondsDown--;
            else
                {
                    if (secondsDown == 0) {
                        if (minutesDown > 0) {
                            secondsDown = 59;
                            minutesDown--;
                        }
                        if (minutesDown == 0) {
                            if (hoursDown > 0) {
                                minutesDown = 59;
                                hoursDown--;
                            }
                            if (hoursDown == 0) {
                                if (daysDown > 0) {
                                hoursDown = 23;
                                daysDown--;
                            }
                        }
                    }
                }
            }
    
    timeElapsedDown++;

    }
    
timeDown.textContent = (daysDown ? (daysDown > 9 ? daysDown : "0" + daysDown) : "00") + " days " + (hoursDown ? (hoursDown > 9 ? hoursDown : "0" + hoursDown) : "00") + " hour " + (minutesDown ? (minutesDown > 9 ? minutesDown : "0" + minutesDown) : "00") + " minutes " + (secondsDown > 9 ? secondsDown : "0" + secondsDown) + " seconds ";

timerDown();
}

function timerUp() {
    tUp = setTimeout(countUp, 1000);
}

function timerDown() {
    tDown = setTimeout(countDown, 1000);
}

set.onclick = function() {

inputSec = document.getElementsByName("secInput")[0].value;
inputDays = Math.floor(inputSec / 86400);
inputHours = Math.floor((inputSec % 86400) / 3600);
inputMinutes = Math.floor(((inputSec % 86400) % 3600) / 60);
inputSeconds = ((inputSec % 86400) % 3600) % 60; 

timeUp.textContent = "00 days 00 hour 00 minutes 00 seconds";
days = 0; seconds = 0; minutes = 0; hours = 0;

timeDown.textContent = (inputDays ? (inputDays > 9 ? inputDays : "0" + inputDays) : "00") + " days " + (inputHours ? (inputHours > 9 ? inputHours : "0" + inputHours) : "00") + " hour " + (inputMinutes ? (inputMinutes > 9 ? inputMinutes : "0" + inputMinutes) : "00") + " minutes " + (inputSeconds > 9 ? inputSeconds : "0" + inputSeconds) + " seconds ";
daysDown = inputDays; hoursDown = inputHours; minutesDown = inputMinutes; secondsDown = inputSeconds;

document.getElementById("start").enabled = true;
document.getElementById("pause").enabled = true;

document.getElementById("startDown").enabled = true;
document.getElementById("pauseDown").enabled = true;
}

/* Start button */
start.onclick = function() {
        timerUp();
}
startDown.onclick = function() {
        timerDown();
}

/* pause button */
pause.onclick = function() {
    clearTimeout(tUp);
}
pauseDown.onclick = function() {
    clearTimeout(tDown);
}

/* Clear button */
clear.onclick = function() {
    timeUp.textContent = "00 days 00 hour 00 minutes 00 seconds";
    days = 0; seconds = 0; minutes = 0; hours = 0;
}
clearDown.onclick = function() {
        timeDown.textContent = "00 days 00 hour 00 minutes 00 seconds";
    daysDown = 0; secondsDown = 0; minutesDown = 0; hoursDown = 0;
}

reset.onclick = function() {
        location.reload();
}