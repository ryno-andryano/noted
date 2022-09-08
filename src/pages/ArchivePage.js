import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';
import {getArchivedNotes, unarchiveNote, deleteNote} from '../utils/local-data';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      query: '',
    };

    this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onQueryChangeHandler(query) {
    this.setState({query});
    if (!query) {
      this.setState({notes: getArchivedNotes()});
    }
  }

  onSearchHandler() {
    const notes = getArchivedNotes();
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.query.toLowerCase()),
    );
    this.setState({notes: filteredNotes});
  }

  onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    this.setState({notes: getArchivedNotes()});
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);
    this.setState({notes: getArchivedNotes()});
  }

  render() {
    return (
      <section className="archive-page">
        <div className="archive-page__head">
          <h2>Archive</h2>
          <SearchBar
            isArchive
            query={this.state.query}
            onQChange={this.onQueryChangeHandler}
            onSearch={this.onSearchHandler}
          />
        </div>
        <div className="archive-page__body">
          {this.state.notes.length > 0 ? (
            <NoteList
              isArchive
              notes={this.state.notes}
              onUnarchive={this.onUnarchiveNoteHandler}
              onDelete={this.onDeleteNoteHandler}
            />
          ) : (
            <EmptyNotes isArchive />
          )}
        </div>
      </section>
    );
  }
}

export default ArchivePage;

