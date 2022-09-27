import React from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../contexts/LanguageContext';
import {AddNoteFormContent as content} from '../utils/content';

function AddNoteForm({title, body, onTitleChange, onBodyChange, onAddNote}) {
  const {language} = React.useContext(LanguageContext);

  return (
    <form
      className="add-form"
      onSubmit={(event) => {
        event.preventDefault();
        onAddNote();
      }}
    >
      <input
        type="text"
        className="add-form__title"
        placeholder={content[language].title}
        value={title}
        onChange={onTitleChange}
      ></input>
      <textarea
        className="add-form__body"
        placeholder={content[language].body}
        value={body}
        onChange={onBodyChange}
        required
      ></textarea>
      <div className="add-form__action">
        <button
          className="add-form__cancel-button"
          type="button"
          onClick={() => {
            window.history.back();
          }}
        >
          {content[language].cancel}
        </button>
        <button className="add-form__save-button" type="submit">
          {content[language].save}
        </button>
      </div>
    </form>
  );
}

AddNoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onAddNote: PropTypes.func.isRequired,
};

export default AddNoteForm;
