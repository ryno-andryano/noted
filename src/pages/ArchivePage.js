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
      input: '',
      query: '',
    };

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onInputChangeHandler(input) {
    this.setState({input});
    if (!input) {
      this.setState({query: ''});
    }
  }

  onSearchHandler() {
    this.setState({query: this.state.input});
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
    let filteredNotes = this.state.notes;
    if (this.state.query) {
      filteredNotes = this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(this.state.query.toLowerCase()),
      );
    }

    return (
      <section className="archive-page">
        <div className="archive-page__head">
          <h2>Archive</h2>
          <SearchBar
            isArchive
            query={this.state.query}
            onInputChange={this.onInputChangeHandler}
            onSearch={this.onSearchHandler}
          />
        </div>
        <div className="archive-page__body">
          {filteredNotes.length > 0 ? (
            <NoteList
              isArchive
              notes={filteredNotes}
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

