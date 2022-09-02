import React from "react";
import "../CSS/navigation.css";

export default function Navigation({ handlePages }) {
  return (
    <nav>
      <div className="main-nav-container">
        <ul className="main-nav d-flex">
          <li onClick={() => handlePages("catalogue")}>Catalogue</li>
          <li onClick={() => handlePages("game")}>Memory Game</li>
        </ul>
      </div>
    </nav>
  );
}
