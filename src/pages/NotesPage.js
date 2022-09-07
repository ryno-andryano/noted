import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function NotesPage({notes, onArchive}) {
  return (
    <section className="notes-page">
      <div className="notes-page__head">
        <h2>Notes</h2>
        <SearchBar />
      </div>
      <div className="notes-page__body">
        <NoteList notes={notes} onArchive={onArchive} />
      </div>
    </section>
  );
}

export default NotesPage;

