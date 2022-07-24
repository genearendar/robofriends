import React from "react"

export default function Search({ value, handleSearch }) {
  return (
    <div className="search-bar">
      <input
        className="robots-search"
        placeholder="Search robots"
        onChange={handleSearch}
        value={value}
      ></input>
    </div>
  )
}
