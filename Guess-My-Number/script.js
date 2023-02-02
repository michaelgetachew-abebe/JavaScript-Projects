"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    displayMessage("😡 No number detected");
  } else if (guess === secretNumber) {
    displayMessage("👏 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // A highscore checker logic
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high!!!" : "Too low!!!");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("You have lost the game!!!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
