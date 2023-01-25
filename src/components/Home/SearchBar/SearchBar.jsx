import React from "react";
// import './styles.css';
import "./style.css";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="searchBar-wrap">
    {/* <form>
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={formSubmit}
      />
      {value && <span>X</span>}
      <button>Go</button>
    </form> */}
    <input
      type="text"
      placeholder="Search By Category"
      value={value}
      onChange={handleSearchKey}
    />
    {value && <span onClick={clearSearch}>X</span>}
  </div>
);

export default SearchBar;
