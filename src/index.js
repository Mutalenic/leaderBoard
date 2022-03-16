import getData from './modules/component.js';
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bKuVOMomD7Dgr7nj8Sef/scores/';
const form = document.getElementById('form');
const name = document.getElementById('name');
const scores = document.getElementById('score');
const refresh = document.getElementById('refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = name.value;
  const score = scores.value;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      score,
      user,
    }),
  });

  name.value = '';
  scores.value = '';
});

refresh.addEventListener('click', getData);

getData();