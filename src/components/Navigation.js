import React from 'react';
import {Link} from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdOutlineStickyNote2,
  MdOutlineArchive,
} from 'react-icons/md';

function Navigation({nav, onCloseNav}) {
  return (
    <nav className={nav ? 'navigation' : 'navigation closed'}>
      <Link
        to="/add"
        className="navigation__link"
        onClick={window.innerWidth < 768 ? onCloseNav : null}
      >
        <MdAddCircleOutline className="navigation__icon" />
        Add Note
      </Link>

      <Link
        to="/"
        className="navigation__link"
        onClick={window.innerWidth < 768 ? onCloseNav : null}
      >
        <MdOutlineStickyNote2 className="navigation__icon" />
        Notes
      </Link>

      <Link
        to="/archive"
        className="navigation__link"
        onClick={window.innerWidth < 768 ? onCloseNav : null}
      >
        <MdOutlineArchive className="navigation__icon" />
        Archive
      </Link>
    </nav>
  );
}

export default Navigation;

