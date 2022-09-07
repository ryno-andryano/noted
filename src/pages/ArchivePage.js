import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function ArchivePage({notes, onUnarchive, onDelete}) {
  return (
    <section className="archive-page">
      <div className="archive-page__head">
        <h2>Archive</h2>
        <SearchBar />
      </div>
      <div className="archive-page__body">
        <NoteList
          isArchive
          notes={notes}
          onUnarchive={onUnarchive}
          onDelete={onDelete}
        />
      </div>
    </section>
  );
}

export default ArchivePage;

