import React from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../contexts/LanguageContext';
import {SearchBarContent as content} from '../utils/content';
import {MdSearch} from 'react-icons/md';

function SearchBar({input, onInputChange, onSearch}) {
  const {language} = React.useContext(LanguageContext);

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
        placeholder={content[language].search}
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

