var remainingTime = 30;
var isStopped = true;

const countContainer = document.getElementsByClassName('button-timer');
const renderTime = () => {
    remainingTime -= 1;
    countContainer.innerHTML = remainingTime;
    if (remainingTime === 0) {
        isStopped = true;
        clearInterval(timer);
        remainingTime = 30;
    }
}

const startTimer = () => {
    if (isStopped) {
        isStopped = false;
        countContainer.innerHTML = remainingTime;
        timer = setInterval(renderTime, 1000);
    }
}

const stopTimer = () => {
    isStopped = true;
    if (timer) {
        clearInterval(timer);
    }
}

const resetTimer = () => {
    isStopped = true;
    clearInterval(timer);
    remainingTime = 30;
    countContainer.innerHTML = remainingTime;   
}

const startButton = document.getElementsByClassName('start-timer')