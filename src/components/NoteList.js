import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({notes, isArchive, onArchive, onUnarchive, onDelete}) {
  const noteItems = notes.map((note) => (
    <NoteItem
      key={note.id}
      isArchive={isArchive}
      onArchive={onArchive}
      onUnarchive={onUnarchive}
      onDelete={onDelete}
      {...note}
    />
  ));

  return <div className="note-list">{noteItems}</div>;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isArchive: PropTypes.bool,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;

