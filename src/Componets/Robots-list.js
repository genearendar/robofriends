import React from "react";
import RobotCard from "./Robot-card";
import "../robots.css";

export default function RobotsList({ robots }) {
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
