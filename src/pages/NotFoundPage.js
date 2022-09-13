import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found">
      <h2 className="not-found__head">404</h2>
      <h3 className="not-found__description">Page Not Found</h3>
      <Link to="/" className="not-found__link">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;

