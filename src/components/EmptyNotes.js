import React from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../contexts/LanguageContext';
import {EmptyNotesContent as content} from '../utils/content';
import {MdOutlineStickyNote2, MdOutlineArchive} from 'react-icons/md';

function EmptyNotes({isArchive}) {
  const {language} = React.useContext(LanguageContext);

  return (
    <div className="empty-notes">
      {isArchive ? (
        <>
          <MdOutlineArchive size={140} className="empty-notes__icon" />
          <p>{content[language].archive}</p>
        </>
      ) : (
        <>
          <MdOutlineStickyNote2 size={140} className="empty-notes__icon" />
          <p>{content[language].active}</p>
        </>
      )}
    </div>
  );
}

EmptyNotes.propTypes = {
  isArchive: PropTypes.bool,
};

export default EmptyNotes;

