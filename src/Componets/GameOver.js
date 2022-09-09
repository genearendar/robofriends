import React from "react";
import "../CSS/gameover.css";

export default function GameOver({ newGame, score }) {
  window.scrollTo(0, 0);
  const bodyEl = document.querySelector("body");

  bodyEl.classList.add("locked");
  return (
    <div className="game-over__container">
      <div className="game-over__card">
        <h1> Game over</h1>
        <p>You scored {score - 1} points</p>
        <button className="btn new-game-btn" onClick={newGame}>
          New Game
        </button>
      </div>
    </div>
  );
}
