// var remainingTime = 30;
// var isStopped = true;

// const countContainer = document.getElementsByClassName('button-timer');
// const renderTime = () => {
//     remainingTime -= 1;
//     countContainer.innerHTML = remainingTime;
//     if (remainingTime === 0) {
//         isStopped = true;
//         clearInterval(timer);
//         remainingTime = 30;
//     }
// }

// const startTimer = () => {
//     if (isStopped) {
//         isStopped = false;
//         countContainer.innerHTML = remainingTime;
//         timer = setInterval(renderTime, 1000);
//     }
// }

// const stopTimer = () => {
//     isStopped = true;
//     if (timer) {
//         clearInterval(timer);
//     }
// }

// const resetTimer = () => {
//     isStopped = true;
//     clearInterval(timer);
//     remainingTime = 30;
//     countContainer.innerHTML = remainingTime;   
// }

// const startButton = document.getElementsByClassName('start-timer')

// const timeH = document.querySelector('h2');
// let timeSecond = 30;

// timeH.innerHTML = `${timeSecond}`;


// const countdown = setInterval (()=>{
//  timeSecond --;
//  timeH.innerHTML = `${timeSecond}`;   
//  if(timeSecond <= 0 || timeSecond < 1){
//     clearInterval(countdown);
//  }
// },1000)

var msec = 0,
sec = 1,
timerOn = 0;
var secVar

function setMSec() {
    if (msec < 10) {
      document.getElementById("msec").innerHTML = "0" + msec;
    } else {
      document.getElementById("msec").innerHTML = msec;
    }
    msec = msec + 1;
    msecVar = setTimeout(setMSec, 100);
    if (msec >= 10) {
      setSec();
      msec = 0;
    }
  }

function setSec() {
    if (sec >= 30) {
        sec = 0;
    }
    if (sec < 10) {
        document.getElementById('sec').innerHTML = "0" + sec;
    }else {
        document.getElementById('sec').innerHTML = sec;
    }
    sec = sec + 1;
}
function start() {
    if (!timerOn) {
        timerOn = 1;
        setMSec();
    }else {
        sec = 30;
        stopTimeout(start())
    }
}

// function stop() {
//     if (sec = 30) {
//         stopTimeout(msecv);
//     }
// }