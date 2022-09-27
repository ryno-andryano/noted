import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';
import {SignUpFormContent as content} from '../utils/content';
import {register} from '../utils/network-data';

function SignUpForm() {
  const {theme} = React.useContext(ThemeContext);
  const {language} = React.useContext(LanguageContext);
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onNameChange(inputName) {
    setName(inputName);
  }

  function onEmailChange(inputEmail) {
    setEmail(inputEmail);
  }

  function onPasswordChange(inputPassword) {
    setPassword(inputPassword);
  }

  async function onSignUpHandler(event) {
    event.preventDefault();

    const {error} = await register({name, email, password});
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="signup-page">
      <img
        className="signup-page__logo"
        src={
          theme === 'light' ? '/images/logo.png' : '/images/logo-inverse.png'
        }
        alt="Noted"
      ></img>
      <form className="signup-page__form" onSubmit={onSignUpHandler}>
        <input
          className="signup-page__name"
          type="text"
          placeholder={content[language].name}
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          required
        ></input>
        <input
          className="signup-page__email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          required
        ></input>
        <input
          className="signup-page__password"
          type="password"
          placeholder={content[language].password}
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
          required
        ></input>
        <button className="signup-page__button" type="submit">
          {content[language].signup}
        </button>
      </form>
      <p className="signup-page__message">
        {content[language].message}
        <Link to="/" className="signup-page__link">
          {content[language].link}
        </Link>
      </p>
    </section>
  );
}

export default SignUpForm;

