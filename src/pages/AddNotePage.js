import React from 'react';
import {useNavigate} from 'react-router-dom';
import useInput from '../hooks/useInput';
import LanguageContext from '../contexts/LanguageContext';
import {PagesContent as content} from '../utils/content';
import AddNoteForm from '../components/AddNoteForm';
import {MdChevronLeft} from 'react-icons/md';
import {addNote} from '../utils/network-data';

function AddNotePage() {
  const {language} = React.useContext(LanguageContext);
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const navigate = useNavigate();

  async function onAddNoteHandler() {
    await addNote({title, body});
    navigate('/');
  }

  return (
    <section className="add-page">
      <div className="add-page__head">
        <h2>{content[language].add}</h2>
        <button
          className="add-page__back-button"
          title="Back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <MdChevronLeft size={28} className="add-page__back-icon" />
        </button>
      </div>
      <div className="add-page__body">
        <AddNoteForm
          title={title}
          body={body}
          onTitleChange={onTitleChange}
          onBodyChange={onBodyChange}
          onAddNote={onAddNoteHandler}
        />
      </div>
    </section>
  );
}

export default AddNotePage;

