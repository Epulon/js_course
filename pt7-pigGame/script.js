'use strict';

//Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const totalScores = [0, 0]; 
let currentScore = 0;
let activePlayer = 0;

//Roll dice button
btnRoll.addEventListener('click', function() {
    
    //Generate random dice roll
    const roll = Math.trunc(Math.random()*6)+1;
    console.log(roll);
    //Remove Hidden attribute from dice img
    dice.classList.remove('hidden');
    //Display dice img
    dice.src = `dice-${roll}.png`;

    //Check if 1 is rolled
    if (dice !== 1) {
        //Add dice to current score
        currentScore = currentScore + roll; //currentScore += roll
        document.getElementById (`current--${activePlayer}`).textContent = currentScore;
    } else {
        //Switch Player
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
});