import React from 'react';
import {Link} from 'react-router-dom';

function LoginForm() {
  return (
    <section className="signup-page">
      <img className="signup-page__logo" src="/images/logo.png" alt=""></img>
      <form className="signup-page__form">
        <input
          className="signup-page__name"
          type="text"
          placeholder="Name"
          required
        ></input>
        <input
          className="signup-page__email"
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          className="signup-page__password"
          type="password"
          placeholder="Password"
          required
        ></input>
        <button className="signup-page__button" type="submit">
          SIGN UP
        </button>
      </form>
      <p className="signup-page__message">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default LoginForm;

