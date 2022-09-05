import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import NotesPage from '../pages/NotesPage';
import AddNotePage from '../pages/AddNotePage';
import ArchivePage from '../pages/ArchivePage';

class NotedApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: window.innerWidth >= 768 ? true : false,
    };
    window.addEventListener('resize', () => {
      window.innerWidth >= 768 && this.setState({nav: true});
    });

    this.onOpenNavHandler = this.onOpenNavHandler.bind(this);
    this.onCloseNavHandler = this.onCloseNavHandler.bind(this);
  }

  onOpenNavHandler() {
    this.setState({nav: true});
  }

  onCloseNavHandler() {
    this.setState({nav: false});
  }

  render() {
    return (
      <>
        <Header
          nav={this.state.nav}
          onOpenNav={this.onOpenNavHandler}
          onCloseNav={this.onCloseNavHandler}
        />
        <main>
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/add" element={<AddNotePage />} />
            <Route path="/archive" element={<ArchivePage />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default NotedApp;

