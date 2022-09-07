import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import NotesPage from '../pages/NotesPage';
import AddNotePage from '../pages/AddNotePage';
import ArchivePage from '../pages/ArchivePage';
import Navigation from './Navigation';
import {
  getActiveNotes,
  getArchivedNotes,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from '../utils/local-data';

class NotedApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: window.innerWidth >= 768 ? true : false,
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
      query: '',
    };

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.state.nav === false && this.setState({nav: true});
      } else {
        this.state.nav === true && this.setState({nav: false});
      }
    });

    this.onOpenNavHandler = this.onOpenNavHandler.bind(this);
    this.onCloseNavHandler = this.onCloseNavHandler.bind(this);
    this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }

  updateNotesState() {
    this.setState({
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
    });
  }

  onOpenNavHandler(event) {
    event.stopPropagation();
    this.setState({nav: true});
  }

  onCloseNavHandler(event) {
    event.stopPropagation();
    this.setState({nav: false});
  }

  onQueryChangeHandler(query) {
    this.setState({query});
  }

  onArchiveNoteHandler(id) {
    archiveNote(id);
    this.updateNotesState();
  }

  onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    this.updateNotesState();
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);
    this.updateNotesState();
  }

  render() {
    return (
      <>
        <Header
          nav={this.state.nav}
          onOpenNav={this.onOpenNavHandler}
          onCloseNav={this.onCloseNavHandler}
        />

        <Navigation nav={this.state.nav} onCloseNav={this.onCloseNavHandler} />

        <main
          className="main"
          onClick={window.innerWidth < 768 ? this.onCloseNavHandler : null}
        >
          <Routes>
            <Route
              path="/"
              element={
                <NotesPage
                  notes={this.state.activeNotes}
                  onArchive={this.onArchiveNoteHandler}
                  onDelete={this.onDeleteNoteHandler}
                  query={this.state.query}
                  onQChange={this.onQueryChangeHandler}
                />
              }
            />
            <Route path="/add" element={<AddNotePage />} />
            <Route
              path="/archive"
              element={
                <ArchivePage
                  notes={this.state.archivedNotes}
                  onUnarchive={this.onUnarchiveNoteHandler}
                  onDelete={this.onDeleteNoteHandler}
                  query={this.state.query}
                  onQChange={this.onQueryChangeHandler}
                />
              }
            />
          </Routes>
        </main>
      </>
    );
  }
}

export default NotedApp;

