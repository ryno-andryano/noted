import React from 'react';
import {useNavigate} from 'react-router-dom';
import AddNoteForm from '../components/AddNoteForm';
import {MdChevronLeft} from 'react-icons/md';
import {addNote} from '../utils/network-data';

function AddNotePage() {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const navigate = useNavigate();

  function onTitleChangeHandler(title) {
    setTitle(title);
  }

  function onBodyChangeHandler(body) {
    setBody(body);
  }

  async function onAddNoteHandler() {
    await addNote({title, body});
    navigate('/');
  }

  return (
    <section className="add-page">
      <div className="add-page__head">
        <h2>Add Note</h2>
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
          onTitleChange={onTitleChangeHandler}
          onBodyChange={onBodyChangeHandler}
          onAddNote={onAddNoteHandler}
        />
      </div>
    </section>
  );
}

export default AddNotePage;

