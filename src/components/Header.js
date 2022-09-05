import React from 'react';
import {MdMenu, MdClose} from 'react-icons/md';
import Navigation from './Navigation';

function Header({nav, onOpenNav, onCloseNav}) {
  return (
    <div className="header">
      <div className="header__inner">
        <a className="header__logo" href="/">
          <img className="header__image" src="./images/logo.png" alt=""></img>
        </a>
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
      <Navigation nav={nav} />
    </div>
  );
}

export default Header;

