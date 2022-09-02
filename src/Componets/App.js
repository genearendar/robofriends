import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Catalogue from "./Catalogue";
import Game from "./Game";

function App() {
  const [pageHandler, setPageHandler] = useState({
    pages: ["catalogue", "game"],
    currentPage: "catalogue",
  });
  const [robots, setRobots] = useState([]);

  function handlePages(val) {
    if (val !== pageHandler.currentPage)
      setPageHandler((prevPageHandler) => {
        return { ...prevPageHandler, currentPage: val };
      });
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  return (
    <div className="main-container">
      <Navigation handlePages={handlePages} />
      {pageHandler.currentPage === "game" ? (
        <Game />
      ) : (
        <Catalogue robots={robots} />
      )}
    </div>
  );
}

export default App;
