import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = parseInt(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  createPromise(delay, state)
    .then(message => {
      iziToast.success({ title: 'Success', message });
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(message => {
      iziToast.error({ title: 'Error', message });
      console.log(`❌ Rejected promise in ${delay}ms`);
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}