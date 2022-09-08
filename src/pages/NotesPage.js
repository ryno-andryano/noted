import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';
import {getActiveNotes, archiveNote, deleteNote} from '../utils/local-data';

class NotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      query: '',
    };

    this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onQueryChangeHandler(query) {
    this.setState({query});
    if (!query) {
      this.setState({notes: getActiveNotes()});
    }
  }

  onSearchHandler() {
    const notes = getActiveNotes();
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.query.toLowerCase()),
    );
    this.setState({notes: filteredNotes});
  }

  onArchiveNoteHandler(id) {
    archiveNote(id);
    this.setState({notes: getActiveNotes()});
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);
    this.setState({notes: getActiveNotes()});
  }

  render() {
    return (
      <section className="notes-page">
        <div className="notes-page__head">
          <h2>Notes</h2>
          <SearchBar
            query={this.state.query}
            onQChange={this.onQueryChangeHandler}
            onSearch={this.onSearchHandler}
          />
        </div>
        <div className="notes-page__body">
          {this.state.notes.length > 0 ? (
            <NoteList
              notes={this.state.notes}
              onArchive={this.onArchiveNoteHandler}
              onDelete={this.onDeleteNoteHandler}
            />
          ) : (
            <EmptyNotes />
          )}
        </div>
      </section>
    );
  }
}

export default NotesPage;

