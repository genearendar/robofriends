import React from "react";

export default function Score({ currentScore, highScore }) {
  return (
    <div className="score-panel d-flex">
      <div>
        <span>Score</span>
        <span>{currentScore}</span>
      </div>
      <div>
        <span>High Score</span>
        <span>{highScore}</span>
      </div>
    </div>
  );
}
