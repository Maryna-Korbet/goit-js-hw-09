// Write a script that, after clicking the "Start" button, changes the <body> background color once a second to a random value using the inline style. When clicking on the "Stop" button, background color change must stop.
// Please note that the «Start» button can be clicked an infinite number of times. Make sure that the «Start» button is disabled while the theme change is running.
// Use the getRandomHexColor function to generate a random color.


const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;
 
startBtn.addEventListener('click', () => {
    startTimer();
    startBtn.disabled = true; 
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function backgroundColorSwitcher() {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
}

function startTimer() {
    timerId = setInterval(backgroundColorSwitcher, 1000);
}

