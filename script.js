'use strict';

// Generates random numbers
const randomNumber = function (maxNumber = 20) {
  return Math.trunc(Math.random() * maxNumber) + 1;
};
const setBodyBgColor = function (color) {
  return (document.querySelector('body').style.backgroundColor = color);
};
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

let secretNumber = randomNumber();
let score = 20;
let numberEl = document.querySelector('.number');
let guessEl = document.querySelector('.guess');
let scoreEl = document.querySelector('.score');
const setHighScore = function (text) {
  document.querySelector('.highscore').textContent = text;
};

const getHighScore = function () {
  return document.querySelector('.highscore').textContent;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessEl.value = '';
  numberEl.style.width = '15rem';
  setBodyBgColor('#222');
  displayMessage('Start guessing...');
  console.log(`Secreet Number: ${secretNumber}`);
});

console.log(`Secreet Number: ${secretNumber}`);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);

  let highscore = getHighScore();
  console.log(highscore);
  // When there is no input
  if (!guess) {
    displayMessage('No number! 😫');
    // When player wins
  } else if (guess === secretNumber) {
    setHighScore(score > highscore ? score : highscore);
    numberEl.textContent = guess;
    setBodyBgColor('#60b374');
    numberEl.style.width = '30rem';
    displayMessage('Correct Number! 😇');

    // When guess is too high
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High! ☹️' : 'Too Low! ☹️');
    score--;
  }

  if (score <= 0) {
    message.textContent = 'You lost the game! 😭';
  }

  scoreEl.textContent = score;
});
