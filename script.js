"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (scoreNumber > 1) {
    if (!guessNumber) {
      document.querySelector(".message").textContent = "⛔ No Number!";
    } else if (guessNumber === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
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
