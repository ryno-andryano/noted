import React from 'react';
import {Link} from 'react-router-dom';

function SignUpForm() {
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

  return (
    <section className="signup-page">
      <img className="signup-page__logo" src="/images/logo.png" alt=""></img>
      <form className="signup-page__form">
        <input
          className="signup-page__name"
          type="text"
          placeholder="Name"
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
          placeholder="Password"
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
          required
        ></input>
        <button className="signup-page__button" type="submit">
          SIGN UP
        </button>
      </form>
      <p className="signup-page__message">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </section>
  );
}

export default SignUpForm;

