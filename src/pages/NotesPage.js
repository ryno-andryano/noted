import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';

function NotesPage({notes, onArchive, onDelete}) {
  return (
    <section className="notes-page">
      <div className="notes-page__head">
        <h2>Notes</h2>
        <SearchBar />
      </div>
      <div className="notes-page__body">
        {notes.length > 0 ? (
          <NoteList notes={notes} onArchive={onArchive} onDelete={onDelete} />
        ) : (
          <EmptyNotes />
        )}
      </div>
    </section>
  );
}

export default NotesPage;

