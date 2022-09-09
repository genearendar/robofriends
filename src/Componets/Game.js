import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";
import Score from "./Score";
import GameOver from "./GameOver";

export default function Game({ robots }) {
  const [gameRobots, setGameRobots] = useState(
    robots
      .map((robot) => ({ ...robot, isSelected: false }))
      .sort(() => Math.random() - 0.5)
  );
  const [isAlive, setIsAlive] = useState(true);
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

    setGameRobots((prevGameRobots) =>
      prevGameRobots.map((robot) => ({ ...robot, isSelected: false }))
    );
  }

  function newGame() {
    setCurrentScore(0);
    const bodyEl = document.querySelector("body");
    bodyEl.classList.remove("locked");
    setIsAlive(true);
  }

  return (
    <main>
      <div className="container game-container">
        <div className="hero">
          <h1>Memorise your Robots</h1>
          <p>Click on a robot the you haven't selected yet to gain score</p>
          <Score currentScore={currentScore} highScore={highScore} />
          {!isAlive && <GameOver newGame={newGame} score={currentScore} />}
        </div>
        <RobotsList robots={gameRobots} selectRobot={selectRobot} />
      </div>
    </main>
  );
}
