import React from 'react';
import {useNavigate} from 'react-router-dom';

function AddNoteForm({title, body, onTitleChange, onBodyChange, onAddNote}) {
  const navigate = useNavigate();

  return (
    <form
      className="add-form"
      onSubmit={(event) => {
        event.preventDefault();
        onAddNote();
        navigate('/');
      }}
    >
      <input
        type="text"
        className="add-form__title"
        placeholder="Note Title"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      ></input>
      <textarea
        className="add-form__body"
        placeholder="Write your note here..."
        value={body}
        onChange={(event) => onBodyChange(event.target.value)}
      ></textarea>
      <div className="add-form__action">
        <button
          className="add-form__cancel-button"
          type="button"
          onClick={() => {
            window.history.back();
          }}
        >
          Cancel
        </button>
        <button className="add-form__save-button" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default AddNoteForm;

