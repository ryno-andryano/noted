import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes, isArchive, onArchive, onUnarchive}) {
  const noteItems = notes.map((note) => (
    <NoteItem
      key={note.id}
      isArchive={isArchive}
      onArchive={onArchive}
      onUnarchive={onUnarchive}
      {...note}
    />
  ));

  return <div className="note-list">{noteItems}</div>;
}

export default NoteList;

