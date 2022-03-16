const ul = document.getElementById('scoreBoard');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bKuVOMomD7Dgr7nj8Sef/scores/';

const loadScores = (data) => {
  ul.innerHTML = '';
  // eslint-disable-next-line array-callback-return
  data.map((scores) => { ul.innerHTML += `<li>${scores.user}:${scores.score}</li>`; });
};

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const FootballResults = await data.result;
  loadScores(FootballResults);
};

export default getData;