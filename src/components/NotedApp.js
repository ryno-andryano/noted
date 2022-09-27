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
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';

function NotedApp() {
  const [nav, setNav] = React.useState(window.innerWidth >= 768 ? true : false);
  const [user, setUser] = React.useState(null);
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'light',
  );
  const [language, setLanguage] = React.useState(
    localStorage.getItem('language') || 'EN',
  );
  const [initializing, setInitializing] = React.useState(true);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && nav === false) {
      setNav(true);
    } else if (window.innerWidth < 768 && nav === true) {
      setNav(false);
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

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }

  function toggleLanguage() {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === 'EN' ? 'ID' : 'EN';
      localStorage.setItem('language', newLanguage);
      return newLanguage;
    });
  }

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const languageContextValue = React.useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  if (initializing === true) {
    return null;
  }

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        {user === null ? (
          <WelcomePage onLoginSuccess={onLoginSuccess} />
        ) : (
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
        )}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default NotedApp;

