import React from 'react';
import {useParams} from 'react-router-dom';
import {getNote} from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import {MdChevronLeft} from 'react-icons/md';

function NoteDetailPageWrapper() {
  const {id} = useParams();
  return <NoteDetailPage id={id} />;
}

class NoteDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    return (
      <section className="detail-page">
        <div className="detail-page__head">
          <h2>Note Detail</h2>
          <button
            className="detail-page__back-button"
            title="Back"
            onClick={() => {
              window.history.back();
            }}
          >
            <MdChevronLeft size={28} className="detail-page__back-icon" />
          </button>
        </div>
        <div className="detail-page__body">
          <NoteDetail note={this.state.note} />
        </div>
      </section>
    );
  }
}

export default NoteDetailPageWrapper;

