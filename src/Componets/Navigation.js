import React from "react";
import "../CSS/navigation.css";

export default function Navigation({ handlePages, currentPage }) {
  console.log(currentPage);
  return (
    <nav>
      <div className="container main-nav-container">
        <ul className="main-nav d-flex">
          <li
            onClick={() => handlePages("catalogue")}
            className={currentPage === "catalogue" ? "active" : undefined}
          >
            Catalogue
          </li>
          <li
            onClick={() => handlePages("game")}
            className={currentPage === "game" ? "active" : undefined}
          >
            Memory Game
          </li>
        </ul>
      </div>
    </nav>
  );
}
