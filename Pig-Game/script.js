"use strict";

// Declaration of DOM components(elements) and variables needed for manipulation in the game

const playerScore0Element = document.querySelector("#score--0");
const playerScore1Element = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn-new");
const player0CurrentScore = document.querySelector("#current--0");
const player1CurrentScore = document.querySelector("#current--1");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

let scores, currentScore, activePlayer;
let playing = true;
// Game start conditions

const startGame = function () {
  let scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  playing = true;

  playerScore0Element.textContent = 0;
  playerScore1Element.textContent = 0;
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;

  diceElement.classList.add("hidden");
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
};
// Start the game with all the initialConditions

startGame();

// Rolling dice functionlity
const rollDice = function () {
  if (playing) {
    // Generate a random number
    console.log("I'm pressed!!!");
    const diceNumber = Math.trunc(Math.random() * 6 + 1);

    // Display the respective dice number

    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${diceNumber}.png`;
    console.log(`Rolled ${diceNumber}`);

    // If diceNumber is different from 1 add it to the current score

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

// Holding the score functionality
const holdScore = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
};

// Switching player functionality

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  currentScore = 0;
  activePlayer ? (activePlayer = 0) : (activePlayer = 1);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};

btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
//btnNew.addEventListener("click", startGame);
