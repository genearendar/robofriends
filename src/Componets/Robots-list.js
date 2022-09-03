import React from "react";
import RobotCard from "./Robot-card";
import "../CSS/robots.css";

// Shuffling cards for the game

export default function RobotsList({ robots, game }) {
  const robotCards = robots.map((robot) => {
    return (
      <RobotCard
        id={robot.id}
        name={robot.name}
        email={robot.email}
        key={robot.id}
      />
    );
  });
  return <div className="robots__container">{robotCards}</div>;
}
