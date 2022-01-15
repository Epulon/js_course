"use strict";

//Selecting DOM element
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 47;
console.log(document.querySelector('.guess').value);
*/

///////////////////////////////////////////
///////////////Lecture 73/74/75/76///////////////
///////////////////////////////////////////

//Generating Random Number
let number = Math.trunc(Math.random()*20)+1;

//Display secret number on the page
//document.querySelector('.number').textContent = number;

//initial Score value
let score = 20;

//Checking if the input is correct
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Display value and type of input in console
  //console.log(guess, typeof guess);
  //If/Else statement for checking inputs

  //No input
  if (!guess) {
    document.querySelector('.message').textContent = 'Please pick a number you eejit!';

  //Correct number
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Gooood joob!';
    document.querySelector('body').style.backgroundColor = '#00ff00';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    score--;
    document.querySelector('.score').textContent = score;

  //If guess is too high
  } else if (guess > number) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'You must be high!'
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You suck!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#800000';
    }

  //If score is too low
  } else if (guess < number) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'You need to get high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You suck!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#800000';
  }
  }
});

/*
//Game reset - StackOverflow
document.querySelector('.again').addEventListener('click', function() {
  window.location.reload();
});
*/

//Game Reset - course
document.querySelector('.again').addEventListener('click', function() {
  number = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
