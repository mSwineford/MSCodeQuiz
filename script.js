var startEl = document.querySelector("#start");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var timer = 15;
var interval = setInterval(function () {
  document.getElementById("timer").innerHTML = start;
  start--;
  if (timer === 0) {
    clearInterval(interval);
    document.getElementById("count").innerHTML = "nextQuestion";
  }
}, 1000);

startEl.addEventListener("click", function () {});
