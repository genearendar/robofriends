import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";
import Score from "./Score";

export default function Game({ robots }) {
  const [gameRobots, setGameRobots] = useState(
    robots
      .map((robot) => ({ ...robot, isSelected: false }))
      .sort(() => Math.random() - 0.5)
  );
  const [isAlive, setIsAlive] = useState(true);
  // const [shuffledRobots, setShuffledRobots] = useState(
  //   [...gameRobots].sort(() => Math.random() - 0.5)
  // );
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

  function selectRobot(id) {
    setGameRobots((prevRobots) =>
      prevRobots.map((robot) => {
        if (robot.id === id) {
          if (!robot.isSelected) {
            return { ...robot, isSelected: true };
          }
          endGame();
          return { ...robot, isSelected: true };
        }
        return robot;
      })
    );

    setCurrentScore((prevScore) => prevScore + 1);
    shuffleRobots();
  }
  function shuffleRobots() {
    setGameRobots((prevGameRobots) =>
      prevGameRobots.sort(() => Math.random() - 0.5)
    );
  }
  function endGame() {
    setIsAlive(false);
    setCurrentScore(0);
    console.log("gameOver");

    setGameRobots((prevGameRobots) =>
      prevGameRobots.map((robot) => ({ ...robot, isSelected: false }))
    );
  }

  function newGame() {
    setIsAlive(true);
  }

  return (
    <main>
      <Score currentScore={currentScore} highScore={highScore} />
      {!isAlive && <h1> Game over</h1>}
      <RobotsList robots={gameRobots} selectRobot={selectRobot} />
    </main>
  );
}
