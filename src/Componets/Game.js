import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";
import Score from "./Score";

export default function Game({ robots }) {
  const [shuffledRobots, setShuffledRobots] = useState(
    [...robots].sort(() => Math.random() - 0.5)
  );
  let [currentScore, setCurrentScore] = useState(0);
  let [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") !== null
      ? Number(localStorage.getItem("highScore"))
      : 0
  );

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  useEffect(() => {
    localStorage.setItem("highScore", highScore.toString());
  }, [highScore]);

  function selectRobot(event) {
    if (event.target.isSelected) {
      setCurrentScore(0);
      shuffleRobots();
      console.log("you lost");
      return;
    }
    event.target.isSelected = true;

    setCurrentScore((prevScore) => prevScore + 1);

    shuffleRobots();

    function shuffleRobots() {
      setShuffledRobots([...robots].sort(() => Math.random() - 0.5));
    }
  }

  return (
    <main>
      <Score currentScore={currentScore} highScore={highScore} />
      <RobotsList robots={shuffledRobots} selectRobot={selectRobot} />
    </main>
  );
}
