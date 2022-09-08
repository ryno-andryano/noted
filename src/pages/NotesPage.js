import React from 'react';
import {useSearchParams} from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';
import {getActiveNotes, archiveNote, deleteNote} from '../utils/local-data';

function NotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('title');

  function changeSearchParams(title) {
    setSearchParams({title});
  }

  return <NotesPage defaultQuery={query} queryChange={changeSearchParams} />;
}

class NotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      input: props.defaultQuery || '',
      query: props.defaultQuery || '',
    };

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  onInputChangeHandler(input) {
    this.setState({input});
    if (!input) {
      this.setState({query: ''});
      this.props.queryChange('');
    }
  }

  onSearchHandler() {
    this.setState({query: this.state.input});
    this.props.queryChange(this.state.input);
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
    let filteredNotes = this.state.notes;
    if (this.state.query) {
      filteredNotes = this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(this.state.query.toLowerCase()),
      );
    }

    return (
      <section className="notes-page">
        <div className="notes-page__head">
          <h2>Notes</h2>
          <SearchBar
            input={this.state.input}
            onInputChange={this.onInputChangeHandler}
            onSearch={this.onSearchHandler}
          />
        </div>
        <div className="notes-page__body">
          {filteredNotes.length > 0 ? (
            <NoteList
              notes={filteredNotes}
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

export default NotesPageWrapper;
