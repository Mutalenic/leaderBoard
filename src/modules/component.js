const ul = document.getElementById('scoreBoard');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bKuVOMomD7Dgr7nj8Sef/scores/';

const loadScores = (data) => {
  ul.innerHTML = '';
  data.map(({ user, score }) => {
    const scorelist = document.createElement('li');
    scorelist.classList.add('score-list');
    scorelist.innerHTML = `<span class="span-player"><i class="fa fa-user fa-2x"></i>${user}</span> <span>${score}</span>`;
    ul.appendChild(scorelist);
    return 0;
  });
};

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const FootballResults = await data.result;
  loadScores(FootballResults);
};

export default getData;