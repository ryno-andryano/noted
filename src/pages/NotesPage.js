import React from 'react';
import {useSearchParams} from 'react-router-dom';
import LanguageContext from '../contexts/LanguageContext';
import {PagesContent as content} from '../utils/content';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';
import {getActiveNotes, archiveNote, deleteNote} from '../utils/network-data';
import Loading from '../components/Loading';

function NotesPage() {
  const {language} = React.useContext(LanguageContext);
  const [notes, setNotes] = React.useState(null);
  const [input, setInput] = React.useState('');
  const [query, setQuery] = React.useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    updateNotes();
  }, []);

  React.useEffect(() => {
    const titleParam = searchParams.get('title');
    if (titleParam) {
      setInput(titleParam);
      setQuery(titleParam);
    } else {
      setInput('');
      setQuery('');
    }
  }, [searchParams]);

  async function updateNotes() {
    const {data} = await getActiveNotes();
    setNotes(data);
  }

  function onInputChangeHandler(input) {
    setInput(input);
    if (!input) {
      setQuery('');
      setSearchParams({title: ''});
    }
  }

  function onSearchHandler() {
    setQuery(input);
    setSearchParams({title: input});
  }

  async function onArchiveNoteHandler(id) {
    await archiveNote(id);
    updateNotes();
  }

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);
    updateNotes();
  }

  if (notes === null) {
    return <Loading />;
  }

  let filteredNotes = notes;
  if (query) {
    filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return (
    <section className="notes-page">
      <div className="notes-page__head">
        <h2>{content[language].notes}</h2>
        <SearchBar
          input={input}
          onInputChange={onInputChangeHandler}
          onSearch={onSearchHandler}
        />
      </div>
      <div className="notes-page__body">
        {filteredNotes.length > 0 ? (
          <NoteList
            notes={filteredNotes}
            onArchive={onArchiveNoteHandler}
            onDelete={onDeleteNoteHandler}
          />
        ) : (
          <EmptyNotes />
        )}
      </div>
    </section>
  );
}

export default NotesPage;
