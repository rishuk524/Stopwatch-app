
const time = document.querySelector(".watch .time");
const startbutton = document.getElementById("start");
const resetbutton = document.getElementById("reset");
const stopbutton = document.getElementById("stop");

let seconds = 0;
let interval = null;

startbutton.addEventListener("click", start);
stopbutton.addEventListener("click", stop);
resetbutton.addEventListener("click", reset);

function timer() {
  seconds++;


  let hrs = Math.floor(seconds / (60 * 60)); 
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  time.innerText = `${hrs}:${mins}:${secs}`;

}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);

  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time.innerText = "00:00:00";
}
