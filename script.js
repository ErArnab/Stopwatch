let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to update the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to format time (add leading zero if needed)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Function to start or stop the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(timer);
    } else {
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
    isRunning = !isRunning;
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}
