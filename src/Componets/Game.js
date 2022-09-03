import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";

export default function Game({ robots }) {
  const [shuffledRobots, setShuffledRobots] = useState(
    [...robots].sort(() => Math.random() - 0.5)
  );
  function shuffleRobots() {
    setShuffledRobots([...robots].sort(() => Math.random() - 0.5));
  }
  return (
    <main>
      <RobotsList robots={shuffledRobots} shuffleRobots={shuffleRobots} />
    </main>
  );
}
