import React from 'react';
import {Link} from 'react-router-dom';
import {MdMenu, MdClose} from 'react-icons/md';

function Header({nav, onOpenNav, onCloseNav}) {
  return (
    <div className="header">
      <div className="header__inner">
        <Link
          to="/"
          className="header__logo"
          onClick={window.innerWidth < 768 ? onCloseNav : null}
        >
          <img className="header__image" src="./images/logo.png" alt=""></img>
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
    </div>
  );
}

export default Header;

