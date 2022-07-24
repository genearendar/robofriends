import React from "react"
import RobotsList from "./Robots-list"
import { robots } from "./robots.js"

function App() {
  return <RobotsList robots={robots} />
}

export default App
