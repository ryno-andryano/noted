import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';
import {
  MdAddCircleOutline,
  MdOutlineStickyNote2,
  MdOutlineArchive,
  MdLogout,
  MdDarkMode,
  MdLightMode,
} from 'react-icons/md';

function Navigation({nav, onCloseNav, onLogout}) {
  const {theme, toggleTheme} = React.useContext(ThemeContext);

  return (
    <nav className={nav ? 'navigation' : 'navigation hidden'}>
      <div className="navigation__top-wrapper">
        <Link to="/add" className="navigation__link" onClick={onCloseNav}>
          <MdAddCircleOutline className="navigation__icon" />
          Add Note
        </Link>

        <Link to="/" className="navigation__link" onClick={onCloseNav}>
          <MdOutlineStickyNote2 className="navigation__icon" />
          Notes
        </Link>

        <Link to="/archive" className="navigation__link" onClick={onCloseNav}>
          <MdOutlineArchive className="navigation__icon" />
          Archive
        </Link>
        <button className="navigation__action" onClick={onLogout}>
          <MdLogout className="navigation__icon" />
          Logout
        </button>
      </div>
      <div className="navigation__bottom-wrapper">
        <div className="navigation__switch-wrapper">
          EN
          <label className="navigation__switch">
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="language"
            />
            <span className="navigation__slider"></span>
          </label>
          ID
        </div>
        <div className="navigation__switch-wrapper">
          <MdLightMode size={22} />
          <label className="navigation__switch">
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="theme"
              checked={theme === 'light' ? false : true}
              onChange={toggleTheme}
            />
            <span className="navigation__slider"></span>
          </label>
          <MdDarkMode size={22} />
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  nav: PropTypes.bool.isRequired,
  onCloseNav: PropTypes.func.isRequired,
};

export default Navigation;

