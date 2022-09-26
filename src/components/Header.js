import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';
import {MdMenu, MdClose} from 'react-icons/md';

function Header({nav, onOpenNav, onCloseNav}) {
  const {theme} = React.useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={onCloseNav}>
          <img
            className="header__image"
            src={
              theme === 'light'
                ? '/images/logo.png'
                : '/images/logo-inverse.png'
            }
            alt=""
          ></img>
        </Link>
        <button
          className="header__menu-button"
          onClick={nav ? onCloseNav : onOpenNav}
        >
          {nav ? (
            <MdClose size={32} className="header__menu-icon" />
          ) : (
            <MdMenu size={32} className="header__menu-icon" />
          )}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  nav: PropTypes.bool.isRequired,
  onOpenNav: PropTypes.func.isRequired,
  onCloseNav: PropTypes.func.isRequired,
};

export default Header;

