import React from 'react';
import PropTypes from 'prop-types';
import {useSearchParams} from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';
import {
  getArchivedNotes,
  unarchiveNote,
  deleteNote,
} from '../utils/network-data';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('title');

  function changeSearchParams(title) {
    setSearchParams({title});
  }

  return <ArchivePage defaultQuery={query} queryChange={changeSearchParams} />;
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      input: props.defaultQuery || '',
      query: props.defaultQuery || '',
    };

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }

  componentDidMount() {
    this.updateNotes();
  }

  async updateNotes() {
    const {data} = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
      };
    });
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

  async onUnarchiveNoteHandler(id) {
    await unarchiveNote(id);
    this.updateNotes();
  }

  async onDeleteNoteHandler(id) {
    await deleteNote(id);
    this.updateNotes();
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

ArchivePage.propTypes = {
  defaultQuery: PropTypes.string,
  queryChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;

