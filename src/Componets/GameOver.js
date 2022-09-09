import React from "react";
import "../CSS/gameover.css";

export default function GameOver({ newGame, score }) {
  window.scrollTo(0, 0);
  const bodyEl = document.querySelector("body");
  bodyEl.classList.add("locked");

  const endGameCardEl = () => {
    if (score === 10) {
      return (
        <div className="game-over__card">
          <h1> You win !</h1>
          <p>You scored {score} points</p>
          <button className="btn new-game-btn" onClick={newGame}>
            New Game
          </button>
        </div>
      );
    }

    return (
      <div className="game-over__card">
        <h1> Game over</h1>
        <p>You scored {score - 1} points</p>
        <button className="btn new-game-btn" onClick={newGame}>
          New Game
        </button>
      </div>
    );
  };

  return <div className="game-over__container">{endGameCardEl()}</div>;
}
