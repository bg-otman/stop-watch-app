const timeElem = document.querySelector(".js-timer");
const startButtonElem = document.querySelector(".js-start-button");
const pauseButtonElem = document.querySelector(".js-pause-button");
const resetButtonElem = document.querySelector(".js-reset-button");
const myAudio = document.getElementById("myAudio");
const displayResult = document.querySelector(".dispear-time");
let currentTime = 5;

function playMusicConfirm() {
  const confrimMessage = document.querySelector(".js-play-confirm");
  confrimMessage.style.display = "flex";

  const yesButton = document.querySelector(".js-yes-button");
  const noButton = document.querySelector(".js-no-button");

  yesButton.addEventListener("click", () => {
    confrimMessage.style.display = "none";
    myAudio.play();
  });

  noButton.addEventListener("click", () => {
    confrimMessage.style.display = "none";
  });

  countDown();

  setTimeout(() => {
    confrimMessage.style.display = "none";
  }, 5000);
}

let isRunning = true;
let timePassed = 0;

startButtonElem.addEventListener("click", () => {
  if (isRunning) {
    startCount();
    isRunning = false;
    playMusicConfirm();
  }
});

pauseButtonElem.addEventListener("click", () => {
  if (!isRunning) {
    stopCount();
  }
});

resetButtonElem.addEventListener("click", () => {
  timeElem.innerHTML = "00:00:00";
  timePassed = 0;
  stopCount();
});

//

function startCount() {
  intervalId = setInterval(() => {
    timePassed += 1000;

    const minute = 60 * 1000;
    const hour = minute * 60;

    let secondsPassed = Math.floor((timePassed % minute) / 1000);

    const minutesPassed = Math.floor(timePassed / minute);

    const hoursPassed = Math.floor(timePassed / hour);

    const secondsString = String(secondsPassed).padStart(2, "0");
    const minutesString = String(minutesPassed % 60).padStart(2, "0");
    const hoursString = String(hoursPassed).padStart(2, "0");

    timeElem.innerHTML = `${hoursString}:${minutesString}:${secondsString}`;
  }, 1000);
}

function stopCount() {
  clearInterval(intervalId);
  isRunning = true;
}

function countDown() {
  timeRunnig = setInterval(() => {
    currentTime -= 1;
    if (currentTime === 0) {
      clearInterval(timeRunnig);
      currentTime = 5;
    }
    displayResult.innerHTML = `(${currentTime})`;
  }, 1000);
}
