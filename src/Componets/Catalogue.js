import React from "react";

export default function Catalogue() {
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
