import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";
import Score from "./Score";

export default function Game({ robots }) {
  const [shuffledRobots, setShuffledRobots] = useState(
    [...robots].sort(() => Math.random() - 0.5)
  );
  let [currentScore, setCurrentScore] = useState(0);

  function selectRobot(event) {
    if (event.target.isSelected) {
      setCurrentScore(0);
      shuffleRobots();
      console.log("you lost");
      return;
    }
    event.target.isSelected = true;
    setCurrentScore((prevScore) => prevScore + 1);
    console.log(currentScore);
    shuffleRobots();

    function shuffleRobots() {
      setShuffledRobots([...robots].sort(() => Math.random() - 0.5));
    }
  }

  return (
    <main>
      <Score currentScore={currentScore} />
      <RobotsList robots={shuffledRobots} selectRobot={selectRobot} />
    </main>
  );
}
