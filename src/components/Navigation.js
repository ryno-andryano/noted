import React from 'react';
import {Link} from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdOutlineStickyNote2,
  MdOutlineArchive,
} from 'react-icons/md';

function Navigation({nav}) {
  return (
    <nav className={nav ? 'navigation' : 'navigation closed'}>
      <Link to="/" className="navigation__link">
        <MdAddCircleOutline className="navigation__icon" />
        Add Note
      </Link>

      <Link to="/" className="navigation__link">
        <MdOutlineStickyNote2 className="navigation__icon" />
        Notes
      </Link>

      <Link to="/" className="navigation__link">
        <MdOutlineArchive className="navigation__icon" />
        Archive
      </Link>
    </nav>
  );
}

export default Navigation;

