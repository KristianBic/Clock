
const timer = document.getElementById('stopWatchTime');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
var hoursSW = 0;
var minutesSW = 0;
var secondsSW = 0;
var running = true;

function startTimer() {
    if (running) {
        running = false;
        stopButton.style.display = "block";
        resetButton.style.display = "block";
        timerCycle();
    }
}

let stopTimer = () => !running ?  running = true : running;

function resetTimer() {
    timer.textContent = '00:00:00';
    running = true;
    hoursSW = 0;
    minutesSW = 0;
    secondsSW = 0;
    stopButton.style.display = "none";
    resetButton.style.display = "none";
}  

function timerCycle() {
    if (!running) {
        secondsSW = parseInt(secondsSW);
        minutesSW = parseInt(minutesSW);
        hoursSW = parseInt(hoursSW);

        secondsSW++;

        if (secondsSW === 60) {
            minutesSW++;
            secondsSW = 0;
        }
        if (minutesSW === 60) {
            hoursSW++;
            minutesSW = 0;
            secondsSW = 0;
        }

        if(hoursSW < 10) {hoursSW = '0' + hoursSW}
        if(minutesSW < 10) {minutesSW = '0' + minutesSW}
        if(secondsSW < 10) {secondsSW = "0" + secondsSW}

        timer.textContent = `${hoursSW}:${minutesSW}:${secondsSW}`
        setTimeout("timerCycle()", 1000);
  }
}



