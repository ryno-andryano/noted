import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function ArchivePage({notes, onUnarchive}) {
  return (
    <section className="archive-page">
      <div className="archive-page__head">
        <h2>Archive</h2>
        <SearchBar />
      </div>
      <div className="archive-page__body">
        <NoteList notes={notes} onUnarchive={onUnarchive} isArchive />
      </div>
    </section>
  );
}

export default ArchivePage;

