function startTimer(duration, displayMinutes, displaySeconds) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    displayMinutes.textContent = minutes;
    displaySeconds.textContent = seconds;


    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let time = 60 * 15,
    displayMinutes = document.querySelector('.payment_right_clock_min'),
    displaySeconds = document.querySelector('.payment_right_clock_sec')
  startTimer(time, displayMinutes, displaySeconds);
};