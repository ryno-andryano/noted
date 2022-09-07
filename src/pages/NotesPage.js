import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function NotesPage() {
  return (
    <section className="notes-page">
      <div className="notes-page__head">
        <h2>Notes</h2>
        <SearchBar />
      </div>
      <div className="notes-page__body">
        <NoteList />
      </div>
    </section>
  );
}

export default NotesPage;

