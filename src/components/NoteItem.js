import React from 'react';
import {MdArchive, MdUnarchive, MdDelete} from 'react-icons/md';
import formatDate from '../utils/format-date';

function NoteItem({
  title,
  createdAt,
  body,
  id,
  isArchive,
  onArchive,
  onUnarchive,
}) {
  return (
    <div className="note-item">
      <h3 className="note-item__title" title={title}>
        {title}
      </h3>
      <p className="note-item__body">{body}</p>
      <div className="note-item__footer">
        <time className="note-item__date" dateTime={createdAt}>
          {formatDate(createdAt)}
        </time>
        <div className="note-item__action">
          <button
            className="note-item__archive-button"
            title={isArchive ? 'Unarchive' : 'Archive'}
            onClick={() => (isArchive ? onUnarchive(id) : onArchive(id))}
          >
            {isArchive ? <MdUnarchive size={22} /> : <MdArchive size={22} />}
          </button>
          <button className="note-item__delete-button" title="Delete">
            <MdDelete size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;

