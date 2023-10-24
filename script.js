function Timer() {
  const clearButton = document.querySelector("#clearButton");
  const stopButton = document.querySelector("#stopButton");
  const startButton = document.querySelector("#startButton");
  const timerEl = document.querySelector("#timer");
  let timer;
  let seconds = 0;
  let minutes = 0;
  let milliseconds = 0;

  function updateTimer() {
    milliseconds++;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
    }

    timerEl.textContent = `${addZero(minutes)}:${addZero(seconds)}:${addZero(
      milliseconds,
      3
    )}`;
  }
  function addZero(value, length = 2) {
    return String(value).padStart(length, "0");
  }

  function startTimer() {
    timer = setInterval(updateTimer, 1);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function clearTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    timerEl.textContent = "00:00:000";
  }

  startButton.addEventListener("click", () => {
    startTimer();
  });

  stopButton.addEventListener("click", () => {
    stopTimer();
  });

  clearButton.addEventListener("click", () => {
    clearTimer();
  });
}

Timer();
