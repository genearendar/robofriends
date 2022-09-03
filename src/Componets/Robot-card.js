import React from "react";

export default function RobotCard({ name, email, id, selectRobot }) {
  return (
    <div className="robot__card" onClick={selectRobot}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
