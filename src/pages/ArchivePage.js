import React from 'react';
import {useSearchParams} from 'react-router-dom';
import LanguageContext from '../contexts/LanguageContext';
import {PagesContent as content} from '../utils/content';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyNotes from '../components/EmptyNotes';
import {
  getArchivedNotes,
  unarchiveNote,
  deleteNote,
} from '../utils/network-data';
import Loading from '../components/Loading';

function ArchivePage() {
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
    const {data} = await getArchivedNotes();
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

  async function onUnarchiveNoteHandler(id) {
    await unarchiveNote(id);
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
    <section className="archive-page">
      <div className="archive-page__head">
        <h2>{content[language].archive}</h2>
        <SearchBar
          input={input}
          onInputChange={onInputChangeHandler}
          onSearch={onSearchHandler}
        />
      </div>
      <div className="archive-page__body">
        {filteredNotes.length > 0 ? (
          <NoteList
            isArchive
            notes={filteredNotes}
            onUnarchive={onUnarchiveNoteHandler}
            onDelete={onDeleteNoteHandler}
          />
        ) : (
          <EmptyNotes isArchive />
        )}
      </div>
    </section>
  );
}

export default ArchivePage;

