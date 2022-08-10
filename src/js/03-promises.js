// Write a script that, when submitting the form, calls the createPromise(position, delay) function as many times as you entered in the amount field. On each call, pass it the number of the promise to be created (position) and the delay given the first delay (delay) and step (step) entered by the user.
// Supplement the code of the createPromise function so that it returns one promise that will be fulfilled or rejected after delay time. The value of the promise must be an object containing the position and delay properties with the values of these parameters. Use the initial function code to choose whether to fulfill or reject the promise.

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const btn = document.querySelector('[type="submit"]');

form.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
  }
    }, delay)
  })
}

function onSubmitForm(e){
  e.preventDefault();
  const element = e.currentTarget.elements;
  btn.disabled = true;

  let delay = parseInt(element.delay.value);
  const step = parseInt(element.step.value);
  const amount = parseInt(element.amount.value);

  setTimeout(() => {
    btn.disabled = false;
  }, amount * step + delay)
  
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {    
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
} 











