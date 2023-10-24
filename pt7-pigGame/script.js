'use strict';

//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, totalScores, activePlayer, playing;
//Starting conditions
const init = function () {
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    totalScores = [0, 0]; 
    currentScore = 0;
    activePlayer = 0;
    playing = true;
};
init();
//Switch Player
const switchPlayer = function () {
    document.getElementById (`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};


//Roll dice button
btnRoll.addEventListener('click', function() {
    if(playing ) {

        //Generate random dice roll
        const roll = Math.trunc(Math.random()*6)+1;
        console.log(roll);
        //Remove Hidden attribute from dice img
        dice.classList.remove('hidden');
        //Display dice img
        dice.src = `dice-${roll}.png`;

        //Check if 1 is rolled
        if (roll !== 1) {
            //Add dice to current score
            currentScore = currentScore + roll; //currentScore += roll
            document.getElementById (`current--${activePlayer}`).textContent = currentScore;
        } else {
            //Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if(playing) {

        //1.Add current score to active player's score
        totalScores[activePlayer] += currentScore; //totalScores[1] = totalScores[1] + currentScore
        document.getElementById (`score--${activePlayer}`).textContent= totalScores[activePlayer];

        //2.Check if active player's score is >= 100
        if (totalScores[activePlayer] >= 100) {
        //If yes finish the game
        playing = false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
        //If no switch to next player
        switchPlayer();
        }
    }
});

//Reseting the game
btnNew.addEventListener('click', init);

//END//