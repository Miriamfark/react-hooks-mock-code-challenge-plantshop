import React, { useState } from "react";

function Search({ onSearch }) {

  const [currentSearch, setCurrentSearch] = useState("")

  function handleOnChange(e) {
    setCurrentSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={currentSearch}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;
