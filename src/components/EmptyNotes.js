import React from 'react';
import PropTypes from 'prop-types';
import {MdOutlineStickyNote2, MdOutlineArchive} from 'react-icons/md';

function EmptyNotes({isArchive}) {
  return (
    <div className="empty-notes">
      {isArchive ? (
        <>
          <MdOutlineArchive size={140} className="empty-notes__icon" />
          <p>Your archived notes appear here.</p>
        </>
      ) : (
        <>
          <MdOutlineStickyNote2 size={140} className="empty-notes__icon" />
          <p>Notes you add appear here.</p>
        </>
      )}
    </div>
  );
}

EmptyNotes.propTypes = {
  isArchive: PropTypes.bool,
};

export default EmptyNotes;

