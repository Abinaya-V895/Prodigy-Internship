// Variables for stopwatch functionality
let timer;
let isRunning = false;
let time = 0; // Time in seconds
let laps = [];

// Get elements
const timeDisplay = document.getElementById("time-display");
const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapList = document.getElementById("lap-list");

// Function to start or stop the stopwatch
function startStop() {
  if (isRunning) {
    clearInterval(timer);
    startStopButton.textContent = "Start";
    isRunning = false;
  } else {
    timer = setInterval(updateTime, 400);
    startStopButton.textContent = "Stop";
    isRunning = true;
  }
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timer);
  isRunning = false;
  time = 0;
  timeDisplay.textContent = formatTime(time);
  startStopButton.textContent = "Start";
  lapList.innerHTML = ""; // Clear laps
}

// Function to record a lap
function recordLap() {
  if (isRunning) {
    const lapTime = formatTime(time);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
    lapList.appendChild(lapItem);
  }
}

// Function to update the stopwatch time
function updateTime() {
  time++;
  timeDisplay.textContent = formatTime(time);
}

// Function to format time as HH:MM:SS
function formatTime(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${sec}`;
}
