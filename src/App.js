import React, { useState, useEffect } from "react"
import RobotsList from "./Robots-list"
import Search from "./Search"
import { robots } from "./robots.js"

function App() {
  const [search, setSearch] = useState("")
  const [filteredRobots, setFilteredRobots] = useState(robots)

  function handleSearch(event) {
    const { value } = event.target
    setSearch(value)
  }

  useEffect(() => {
    search.length
      ? setFilteredRobots(() =>
          robots.filter((robot) => {
            const values = Object.values(robot)
            const regex = new RegExp(search, "i")
            console.log(regex)
            return values.some((val) => {
              let result = regex.test(val)
              return result
            })
          })
        )
      : setFilteredRobots(robots)
  }, [search])

  return (
    <div className="main-container">
      <h1>My RoboFriends</h1>
      <Search value={search} handleSearch={handleSearch} />
      <RobotsList robots={filteredRobots} />
    </div>
  )
}

export default App
