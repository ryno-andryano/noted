import React from 'react';
import {MdSearch} from 'react-icons/md';

function SearchBar() {
  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search note..."
        className="search-bar__input"
      ></input>
      <button type="submit" className="search-bar__button">
        <MdSearch size={20} className="search-bar__icon" />
      </button>
    </form>
  );
}

export default SearchBar;

