//---TIMER---//
var remainingTime = 30;
var isStopped = true;

const countContainer = document.getElementById('sec');
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

const startButton = document.getElementById('start');

startButton.onclick = startTimer;

//---CARD OBJECTS---//
// const neck = ['Chin tuck', 'Neck extension', 'Neck towel', 'Side-to-side']
// let neckStretch1 = 'Chin tuck'
// let neckStretch2 = 'Neck extension'
// let neckStretch3 = 'Neck towel'
// let neckStretch4 = 'Side-to-side'

// const shoulder = ['Desk pec stretch', 'Doorway pec stretch', 'Overhead reach', 'W to Y', 'Cross body']
// let shoulderStretch1 = 'Desk pec stretch'
// let shoulderStretch2 = 'Doorway pec stretch'
// let shoulderStretch3 = 'Overhead reach'
// let shoulderStretch4 = 'W to Y'
// let shoulderStretch5 = 'Cross body'

// const hand = ['One-by-one', 'Wrist extensor', 'Wrist flexor']
// let handStretch1 = 'One-by-one'
// let handStretch2 = 'Wrist extensor'
// let handStretch3 = 'Wrist flexor'

// const lowBack = ['Low back rotation', 'Bending over', 'Seated knee to chest', 'Seated pelvic tilt']
// let lowBack1 = 'Low back rotation'
// let lowBack2 = 'Bending over'
// let lowBack3 = 'Seated knee to chest'
// let lowBack4 = 'Seated pelvic tilt'

// const hip = ['Kneeling psoas stretch', 'Standing psoas stretch', 'Seated glute stretch', 'Seated cross-body glute']
// let hipStretch1 = 'Kneeling psoas stretch'
// let hipStretch2 = 'Standing psoas stretch'
// let hipStretch3 = 'Seated glute stretch'
// let hipStretch4 = 'Seated cross-body glute'

// const leg = ['Seated hamstring stretch', 'Butterfly stretch', 'Standing quad stretch', 'Chair quad stretch', 'Seated abductor stretch']
// let legStretch1 = 'Seated hamgsting stretch'
// let legStretch2 = 'Butterfly stretch'
// let legStretch3 = 'Standing quad stretch'
// let legStretch4 = 'Chair quad stretch'
// let legStretch5 = 'Seated abductor stretch'

//---CARD DECK---//
mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};
mobiscroll.listview('.cardDeck', {
    stages: [{
        percent: -20,
        action: function (event, inst) {
            inst.move(event.target, 0);
            return false;
        }
    }, {
        percent: 20,
        action: function (event, inst) {
            inst.move(event.target, 0);
            return false;
        }
    }],
    actionable: false
});
// function dropdownFunction() {
//     document.getElementById("myDropdown").classList.toggle('show')
// }

function dropdownFunction() {
    var x = document.getElementById('dropdownClick')
    if (x.style.display === 'none') {
        x.style.display = 'block'
    }else {
        x.style.display = 'none'
    }
}