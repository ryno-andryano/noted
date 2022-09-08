import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';

function ArchivePage({
  notes,
  query,
  onSearch,
  onQChange,
  onUnarchive,
  onDelete,
}) {
  return (
    <section className="archive-page">
      <div className="archive-page__head">
        <h2>Archive</h2>
        <SearchBar
          isArchive
          query={query}
          onQChange={onQChange}
          onSearch={onSearch}
        />
      </div>
      <div className="archive-page__body">
        {notes.length > 0 ? (
          <NoteList
            isArchive
            notes={notes}
            onUnarchive={onUnarchive}
            onDelete={onDelete}
          />
        ) : (
          <EmptyNotes isArchive />
        )}
      </div>
    </section>
  );
}

export default ArchivePage;

