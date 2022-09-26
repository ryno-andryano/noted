import React from 'react';
import PropTypes from 'prop-types';
import {MdSearch} from 'react-icons/md';

function SearchBar({input, onInputChange, onSearch}) {
  return (
    <form
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <input
        type="search"
        placeholder="Search note..."
        className="search-bar__input"
        value={input}
        onChange={(event) => onInputChange(event.target.value)}
      ></input>
      <button type="submit" className="search-bar__button">
        <MdSearch size={20} className="search-bar__icon" />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  input: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

