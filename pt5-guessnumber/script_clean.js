"use strict";

//Generating Random Number
let number = Math.trunc(Math.random()*20)+1;


//initial Score value
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

//Checking if the input is correct
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If/Else statement for checking inputs
  //No input
  if (!guess) {
    displayMessage('Please pick a number you eejit!');

  //Correct number
  } else if (guess === number) {
    displayMessage('Goooood jooob!');
    document.querySelector('body').style.backgroundColor = '#00ff00';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    score--;
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore;
    }
    //Number NOT correct
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'You must be high!' : 'You need to get high');
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You suck!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#800000';
    }
  }
});

//Game Reset
document.querySelector('.again').addEventListener('click', function() {
  number = Math.trunc(Math.random()*20)+1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
