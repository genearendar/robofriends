import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";

export default function Game({ robots }) {
  return (
    <main>
      <RobotsList robots={robots} game={true} />
    </main>
  );
}
