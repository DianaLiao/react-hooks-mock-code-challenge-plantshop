import React,{useState} from "react";

function Search({searchText, setSearch}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
