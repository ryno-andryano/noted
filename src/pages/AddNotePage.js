import React from 'react';
import AddNoteForm from '../components/AddNoteForm';
import {MdChevronLeft} from 'react-icons/md';
import {addNote} from '../utils/local-data';

class AddNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onTitleChangeHandler(title) {
    this.setState({title});
  }

  onBodyChangeHandler(body) {
    this.setState({body});
  }

  onAddNoteHandler() {
    addNote({title: this.state.title, body: this.state.body});
    this.setState({title: '', body: ''});
  }

  render() {
    return (
      <section className="add-page">
        <div className="add-page__head">
          <h2>Add Note</h2>
          <button
            className="add-page__back-button"
            title="Back"
            onClick={() => {
              window.history.back();
            }}
          >
            <MdChevronLeft size={28} className="add-page__back-icon" />
          </button>
        </div>
        <div className="add-page__body">
          <AddNoteForm
            title={this.state.title}
            body={this.state.body}
            onTitleChange={this.onTitleChangeHandler}
            onBodyChange={this.onBodyChangeHandler}
            onAddNote={this.onAddNoteHandler}
          />
        </div>
      </section>
    );
  }
}

export default AddNotePage;

