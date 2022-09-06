import React from 'react';
import SearchBar from '../components/SearchBar';

function NotesPage() {
  return (
    <section className="notes-page">
      <div className="notes-page__head">
        <h2>Notes</h2>
        <SearchBar />
      </div>
      <div className="notes-page__body"></div>
    </section>
  );
}

export default NotesPage;

