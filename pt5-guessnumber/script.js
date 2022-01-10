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
///////////////Lecture 73/74///////////////
///////////////////////////////////////////

//Generating Random Number
const number = Math.trunc(Math.random()*20)+1;
//Display secret number on the page
document.querySelector('.number').textContent = number;

//initial Score value
let score = 20;

//Checking if the input is correct
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Display value and type of input in console
  console.log(guess, typeof guess);
  //If/Else statement for checking inputs
  if (!guess) {
    document.querySelector('.message').textContent = 'Please pick a number you eejit!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Gooood joob!';
  } else if (guess > number) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'You must be high!'
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You suck!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < number) {
    if (score > 1) {
    document.querySelector('.message').textContent = 'You need to get high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You suck!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  }
});
