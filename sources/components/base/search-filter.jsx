import React from "react";

function SearchFilter() {
  return (
    <div className="search-filter">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="filter">
        <input type="text" placeholder="Filter" />
      </div>
    </div>
  );
}

export default SearchFilter;