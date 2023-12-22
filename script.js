'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let updatedScore = 20;
let highscore = 0;
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = updatedScore;
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!🛑';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (updatedScore > highscore) {
      highscore = updatedScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (updatedScore > 1) {
      document.querySelector('.message').textContent = 'Too High!📈';
      updatedScore--;
      document.querySelector('.score').textContent = updatedScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!😢';
    }
  } else if (guess < number) {
    if (updatedScore > 1) {
      document.querySelector('.message').textContent = 'Too Low!📉';
      updatedScore--;
      document.querySelector('.score').textContent = updatedScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!😢';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  updatedScore = 20;
  document.querySelector('.score').textContent = updatedScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
