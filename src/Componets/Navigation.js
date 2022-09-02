import React from "react";
import "../CSS/navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div className="main-nav-container">
        <ul className="main-nav d-flex">
          <li>Catalogue</li>
          <li>Memory Game</li>
        </ul>
      </div>
    </nav>
  );
}
