import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';
import {LoginFormContent as content} from '../utils/content';
import {login} from '../utils/network-data';

function LoginForm({onLoginSuccess}) {
  const {theme} = React.useContext(ThemeContext);
  const {language} = React.useContext(LanguageContext);
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
      <img
        className="login-page__logo"
        src={
          theme === 'light' ? '/images/logo.png' : '/images/logo-inverse.png'
        }
        alt="Noted"
      ></img>
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
          placeholder={content[language].password}
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
          required
        ></input>
        <button className="login-page__button" type="submit">
          {content[language].login}
        </button>
      </form>
      <p className="login-page__message">
        {content[language].message}
        <Link to="/sign-up" className="login-page__link">
          {content[language].link}
        </Link>
      </p>
    </section>
  );
}

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;

