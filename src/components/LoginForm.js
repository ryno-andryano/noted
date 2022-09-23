import React from 'react';
import {Link} from 'react-router-dom';

function LoginForm() {
  return (
    <section className="login-page">
      <img className="login-page__logo" src="/images/logo.png" alt=""></img>
      <form className="login-page__form">
        <input
          className="login-page__email"
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          className="login-page__password"
          type="password"
          placeholder="Password"
          required
        ></input>
        <button className="login-page__button" type="submit">
          LOGIN
        </button>
      </form>
      <p className="login-page__message">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </section>
  );
}

export default LoginForm;

