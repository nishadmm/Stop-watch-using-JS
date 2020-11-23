// Buttons
const startBtn = document.getElementById('start-btn'),
  stoptBtn = document.getElementById('stop-btn'),
  resetBtn = document.getElementById('reset-btn');

// Values 
const appendTens = document.getElementById('tens'),
  appendSeconds = document.getElementById('seconds');
var seconds = 00,
  tens = 00,
  interval;

// Start button listner 
startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
  document.querySelector('.loader').style.display = 'flex';
})

// Stop button listner
stoptBtn.addEventListener('click', () => {
  clearInterval(interval);
  document.querySelector('.loader').style.display = 'none';
});

// Reset button listner
resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  document.querySelector('.loader').style.display = 'none';
});

// Start time
function startTime() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

