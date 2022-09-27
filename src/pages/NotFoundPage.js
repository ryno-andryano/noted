import React from 'react';
import {Link} from 'react-router-dom';
import LanguageContext from '../contexts/LanguageContext';
import {PagesContent as content} from '../utils/content';

function NotFoundPage() {
  const {language} = React.useContext(LanguageContext);

  return (
    <section className="not-found">
      <h2 className="not-found__head">404</h2>
      <h3 className="not-found__description">{content[language].notFound}</h3>
      <Link to="/" className="not-found__link">
        {content[language].link}
      </Link>
    </section>
  );
}

export default NotFoundPage;

