import React from "react";
import "../CSS/score.css";

export default function Score({ currentScore, highScore }) {
  return (
    <div className="score-panel d-flex">
      <div className="score-panel__field">
        <span>Score:</span>
        <span>{currentScore}</span>
      </div>
      <div className="score-panel__field">
        <span>High Score:</span>
        <span>{highScore}</span>
      </div>
    </div>
  );
}
