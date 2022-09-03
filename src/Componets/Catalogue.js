import React, { useState, useEffect } from "react";
import RobotsList from "./Robots-list";
import Search from "./Search";
import Scroll from "./Scroll";

export default function Catalogue({ robots }) {
  const [search, setSearch] = useState("");
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

  return (
    <main>
      <div className="hero">
        <h1>My RoboFriends</h1>
        <Search value={search} handleSearch={handleSearch} />
      </div>
      <Scroll>
        <RobotsList robots={filteredRobots} />
      </Scroll>
    </main>
  );
}
