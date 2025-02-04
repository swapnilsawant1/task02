let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const timerDisplay = document.getElementById("timerDisplay");

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateTime, 1);
    startStopBtn.textContent = "Pause";
    running = true;
  } else {
    clearInterval(tInterval);
    startStopBtn.textContent = "Resume";
    running = false;
  }
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function resetStopwatch() {
  clearInterval(tInterval);
  running = false;
  timerDisplay.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
  difference = 0;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

startStopBtn.addEventListener("click", startStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
