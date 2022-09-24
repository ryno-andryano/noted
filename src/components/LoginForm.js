import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../utils/network-data';

function LoginForm({onLoginSuccess}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onEmailChange(inputEmail) {
    setEmail(inputEmail);
  }

  function onPasswordChange(inputPassword) {
    setPassword(inputPassword);
  }

  async function onLoginHandler(event) {
    event.preventDefault();
    const {error, data} = await login({email, password});

    if (!error) {
      onLoginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <img className="login-page__logo" src="/images/logo.png" alt=""></img>
      <form className="login-page__form" onSubmit={onLoginHandler}>
        <input
          className="login-page__email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          required
        ></input>
        <input
          className="login-page__password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
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
