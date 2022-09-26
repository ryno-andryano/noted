import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {putAccessToken, getUserLogged} from '../utils/network-data';
import Header from './Header';
import NotesPage from '../pages/NotesPage';
import AddNotePage from '../pages/AddNotePage';
import ArchivePage from '../pages/ArchivePage';
import NoteDetailPage from '../pages/NoteDetailPage';
import Navigation from './Navigation';
import NotFoundPage from '../pages/NotFoundPage';
import WelcomePage from '../pages/WelcomePage';

function NotedApp() {
  const [nav, setNav] = React.useState(window.innerWidth >= 768 ? true : false);
  const [user, setUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      nav === false && setNav({nav: true});
    } else {
      nav === true && setNav({nav: false});
    }
  });

  React.useEffect(() => {
    async function getUser() {
      const {data} = await getUserLogged();
      setUser(data);
      setInitializing(false);
    }
    getUser();
  }, []);

  function onOpenNavHandler(event) {
    event.stopPropagation();
    setNav(true);
  }

  function onCloseNavHandler(event) {
    event.stopPropagation();
    if (window.innerWidth < 768) {
      setNav(false);
    }
  }

  async function onLoginSuccess({accessToken}) {
    putAccessToken(accessToken);
    const {data} = await getUserLogged();
    setUser(data);
  }

  function onLogout() {
    setUser(null);
    putAccessToken('');
  }

  if (initializing === true) {
    return null;
  }

  if (user === null) {
    return <WelcomePage onLoginSuccess={onLoginSuccess} />;
  } else {
    return (
      <>
        <Header
          nav={nav}
          onOpenNav={onOpenNavHandler}
          onCloseNav={onCloseNavHandler}
        />
        <Navigation
          nav={nav}
          onCloseNav={onCloseNavHandler}
          onLogout={onLogout}
        />

        <main className="main" onClick={onCloseNavHandler}>
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/add" element={<AddNotePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/detail/:id" element={<NoteDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default NotedApp;

