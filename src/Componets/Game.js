import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";

export default function Game({ robots }) {
  const [shuffledRobots, setShuffledRobots] = useState(
    [...robots].sort(() => Math.random() - 0.5)
  );

  function selectRobot(event) {
    if (event.target.isSelected) {
      console.log("you lost");
      return;
    }
    event.target.isSelected = true;
    function shuffleRobots() {
      setShuffledRobots([...robots].sort(() => Math.random() - 0.5));
    }
    shuffleRobots();
  }

  return (
    <main>
      <RobotsList robots={shuffledRobots} selectRobot={selectRobot} />
    </main>
  );
}
