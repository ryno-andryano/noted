import React from 'react';
import formatDate from '../utils/format-date';

function NoteDetail({note}) {
  return (
    <div className="note-detail">
      <h3 className="note-detail__title" title={note.title}>
        {note.title}
      </h3>
      <time className="note-detail__date" dateTime={note.createdAt}>
        {formatDate(note.createdAt)}
      </time>
      <p className="note-detail__body">{note.body}</p>
    </div>
  );
}

export default NoteDetail;

