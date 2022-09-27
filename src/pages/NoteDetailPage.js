import React from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {getNote} from '../utils/network-data';
import LanguageContext from '../contexts/LanguageContext';
import {PagesContent as content} from '../utils/content';
import NoteDetail from '../components/NoteDetail';
import NotFoundPage from './NotFoundPage';
import {MdChevronLeft} from 'react-icons/md';

function NoteDetailPage() {
  const {language} = React.useContext(LanguageContext);
  const [note, setNote] = React.useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function updateNote() {
      const {data} = await getNote(id);
      setNote(data);
    }
    updateNote();
  }, [id]);

  if (note == null) {
    return <NotFoundPage />;
  }

  if (!note) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="detail-page">
      <div className="detail-page__head">
        <h2>{content[language].detail}</h2>
        <button
          className="detail-page__back-button"
          title="Back"
          onClick={() => {
            navigate(-1);
          }}
        >
          <MdChevronLeft size={28} className="detail-page__back-icon" />
        </button>
      </div>
      <div className="detail-page__body">
        <NoteDetail note={note} />
      </div>
    </section>
  );
}

export default NoteDetailPage;

