import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import RobotsList from "./Robots-list";
import Search from "./Search";
import Scroll from "./Scroll";

function App() {
  const [pageHandler, setPageHandler] = useState({
    pages: ["catalogue", "game"],
    currentPage: "catalogue",
  });
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

  function handlePages(val) {
    if (val !== pageHandler.currentPage)
      setPageHandler((prevPageHandler) => {
        return { ...prevPageHandler, currentPage: val };
      });
  }
  function handleSearch(event) {
    const { value } = event.target;
    setSearch(value);
  }

  const filteredRobots = robots.filter((robot) => {
    const values = Object.values(robot);
    const regex = new RegExp(search, "i");
    return values.some((val) => {
      let result = regex.test(val);
      return result;
    });
  });

  useEffect(() => {
    const filteredRobots = robots.filter((robot) => {
      const values = Object.values(robot);
      const regex = new RegExp(search, "i");
      return values.some((val) => {
        let result = regex.test(val);
        return result;
      });
    });
  }, [search]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  return (
    <div className="main-container">
      <Navigation handlePages={handlePages} />
      <div className="hero">
        <h1>My RoboFriends</h1>
        <Search value={search} handleSearch={handleSearch} />
      </div>
      <Scroll>
        <RobotsList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
