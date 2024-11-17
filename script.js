"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (scoreNumber > 1) {
    if (!guessNumber) {
      document.querySelector(".message").textContent = "⛔ No Number!";
    } else if (guessNumber === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else if (guessNumber > secretNumber) {
      document.querySelector(".message").textContent = "📈 Too high!";
      document.querySelector(".score").textContent = --scoreNumber;
    } else if (guessNumber < secretNumber) {
      document.querySelector(".message").textContent = "📉 Too low!";
      document.querySelector(".score").textContent = --scoreNumber;
    }
  } else {
    document.querySelector(".message").textContent = "💥 You lost the game";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = scoreNumber;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
