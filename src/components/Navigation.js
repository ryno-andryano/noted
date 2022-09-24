import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdOutlineStickyNote2,
  MdOutlineArchive,
  MdLogout,
} from 'react-icons/md';

function Navigation({nav, onCloseNav, onLogout}) {
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
      </div>
      <div className="navigation__bottom-wrapper">
        <button className="navigation__action" onClick={onLogout}>
          <MdLogout className="navigation__icon" />
          Logout
        </button>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  nav: PropTypes.bool.isRequired,
  onCloseNav: PropTypes.func.isRequired,
};

export default Navigation;

