import React from "react";

export default function Score({ currentScore }) {
  return (
    <div className="score-panel d-flex">
      <div>
        <span>Score</span>
        <span>0</span>
      </div>
      <div>
        <span>High Score</span>
        <span>{currentScore}</span>
      </div>
    </div>
  );
}
