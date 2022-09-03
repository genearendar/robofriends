import React from "react";
import RobotCard from "./Robot-card";
import "../CSS/robots.css";

// Shuffling cards for the game

export default function RobotsList({ robots, shuffleRobots }) {
  console.log("in component: " + robots);
  const robotCards = robots.map((robot) => {
    return (
      <RobotCard
        id={robot.id}
        name={robot.name}
        email={robot.email}
        key={robot.id}
        shuffleRobots={shuffleRobots}
      />
    );
  });
  return <div className="robots__container">{robotCards}</div>;
}
