import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import NotesPage from '../pages/NotesPage';
import AddNotePage from '../pages/AddNotePage';
import ArchivePage from '../pages/ArchivePage';
import Navigation from './Navigation';

class NotedApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: window.innerWidth >= 768 ? true : false,
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
  }

  onOpenNavHandler(event) {
    event.stopPropagation();
    this.setState({nav: true});
  }

  onCloseNavHandler(event) {
    event.stopPropagation();
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
        <Navigation nav={this.state.nav} onCloseNav={this.onCloseNavHandler} />
        <main
          className="main"
          onClick={window.innerWidth < 768 ? this.onCloseNavHandler : null}
        >
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

