"use strict";

// Generate random number
const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

// Initialize state variables
let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

// Utility function to update text content
const updateTextContent = (selector, message) => {
  document.querySelector(selector).textContent = message;
};

// Reset game to initial state
const resetGame = () => {
  secretNumber = generateSecretNumber();
  score = 20;
  updateTextContent(".message", "Start guessing...");
  updateTextContent(".number", "?");
  updateTextContent(".score", score);
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};

// Handle guess check
const handleGuessCheck = () => {
  const guess = Number(document.querySelector(".guess").value);

  // If no input
  if (!guess) {
    updateTextContent(".message", "⛔ No Number!");

    // If guess is correct
  } else if (guess === secretNumber) {
    updateTextContent(".message", "🎉 Correct Number!");
    updateTextContent(".number", secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      updateTextContent(".highscore", highscore);
    }

    // If guess is incorrect
  } else {
    if (score > 1) {
      updateTextContent(
        ".message",
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
      );
      updateTextContent(".score", --score);
    } else {
      updateTextContent(".message", "💥 You lost the game");
      updateTextContent(".score", 0);
    }
  }
};

// Add event listeners
document.querySelector(".check").addEventListener("click", handleGuessCheck);
document.querySelector(".again").addEventListener("click", resetGame);
