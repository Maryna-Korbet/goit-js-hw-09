// Write a timer script that counts down to a specific date.

import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
let intervalId = null;

//Сalendar setting and error notification 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {   
        if (selectedDates[0] < options.defaultDate) {
            // window.alert('Please choose a date in the future'); 
            Notiflix.Notify.failure('Please choose a date in the future'); 
            startBtn.disabled = true;
        }
        else {
            startBtn.disabled = false;
            startBtn.addEventListener('click', startTimer);
        }
    }
}
flatpickr(refs.input, options); 

function startTimer() {
    intervalId = setInterval(() => {
        timeUpdate();
    }, 1000);
    refs.input.disabled = true;
    startBtn.disabled = true;
}

function timeUpdate() {
    const currentDate = new Date();
    const startDate = new Date(refs.input.value);
    const deltaDate = startDate - currentDate;
    this.isActive = false;
    if (deltaDate <= 0 || this.isActive) {
        return;
    }
    else {
        if (deltaDate > 0) {
            const { days, hours, minutes, seconds } = convertMs(deltaDate);
            refs.days.textContent = `${days}`;
            refs.hours.textContent = `${hours}`;
            refs.minutes.textContent = `${minutes}`;
            refs.seconds.textContent = `${seconds}`;
            this.isActive = true;
        }
        else {
            clearInterval(intervalId);
            this.isActive = false;
        }
    }
}

//Сhanges the date format
function addLeadingZero(value) {
    return String(value).padStart(2, 0);
}

//Converts to the format 00:00:00:00
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}


