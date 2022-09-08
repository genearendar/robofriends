import React from "react";
import RobotCard from "./Robot-card";
import "../CSS/robots.css";

export default function RobotsList({ robots, selectRobot }) {
  const robotCards = robots.map((robot) => {
    if (selectRobot) {
      return (
        <RobotCard id={robot.id} key={robot.id} selectRobot={selectRobot} />
      );
    }
    return (
      <RobotCard
        id={robot.id}
        name={robot.name}
        email={robot.email}
        key={robot.id}
        selectRobot={selectRobot}
      />
    );
  });
  return <div className="robots__container">{robotCards}</div>;
}
