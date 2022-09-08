import React from "react";

export default function RobotCard({ name, email, id, selectRobot }) {
  function handleClick() {
    if (selectRobot) {
      selectRobot(id);
    }
  }
  return (
    <div className="robot__card" onClick={handleClick}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
