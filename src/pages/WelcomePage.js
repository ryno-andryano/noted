import React from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function WelcomePage({onLoginSuccess}) {
  return (
    <main className="main welcome">
      <div className="welcome-page">
        <img
          className="welcome-page__illustration"
          src="/images/illustration.png"
          alt=""
        ></img>
        <Routes>
          <Route
            path="/*"
            element={<LoginForm onLoginSuccess={onLoginSuccess} />}
          />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes>
      </div>
    </main>
  );
}

export default WelcomePage;
