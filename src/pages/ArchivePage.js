import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function ArchivePage() {
  return (
    <section className="notes-page">
      <div className="notes-page__head">
        <h2>Archive</h2>
        <SearchBar />
      </div>
      <div className="notes-page__body">
        <NoteList />
      </div>
    </section>
  );
}

export default ArchivePage;

