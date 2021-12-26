"use strict";

//Selecting DOM element
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 47;
console.log(document.querySelector('.guess').value);
