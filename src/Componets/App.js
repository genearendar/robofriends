import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";
import Search from "./Search";
import Scroll from "./Scroll";

function App() {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

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
      <nav>
        <h1>My RoboFriends</h1>
        <Search value={search} handleSearch={handleSearch} />
      </nav>
      <Scroll>
        <RobotsList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
