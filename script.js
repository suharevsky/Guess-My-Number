'use strict';

// Generates random numbers
const randomNumber = function (maxNumber = 20) {
  return Math.trunc(Math.random() * maxNumber) + 1;
};

let secretNumber = randomNumber();
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  console.log(`Secreet Number: ${secretNumber}`);
});

console.log(`Secreet Number: ${secretNumber}`);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  let message = document.querySelector('.message');
  let highscore = document.querySelector('.highscore').textContent;

  // When there is no input
  if (!guess) {
    message.textContent = 'No number! 😫';
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.highscore').textContent =
      score > highscore ? score : highscore;
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b374';
    document.querySelector('.number').style.width = '30rem';
    message.textContent = 'Correct Number! 😇';
    // When guess is too high
  } else if (guess > secretNumber) {
    message.textContent = 'Too High! ☹️';
    score--;
    // When guess is too low
  } else if (guess < secretNumber) {
    message.textContent = 'Too Low! ☹️';
    score--;
  }

  if (score <= 0) {
    message.textContent = 'You lost the game! 😭';
  }

  document.querySelector('.score').textContent = score;
});
