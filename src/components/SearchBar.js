import React from 'react';
import {MdSearch} from 'react-icons/md';

function SearchBar({isArchive, query, onQChange, onSearch}) {
  return (
    <form
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(isArchive);
      }}
    >
      <input
        type="search"
        placeholder="Search note..."
        className="search-bar__input"
        value={query}
        onChange={(event) => onQChange(event.target.value)}
      ></input>
      <button type="submit" className="search-bar__button">
        <MdSearch size={20} className="search-bar__icon" />
      </button>
    </form>
  );
}

export default SearchBar;

