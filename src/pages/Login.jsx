import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { validateEmail, validatePassword } from '../services/validations';
import { storageTokens, storageMail } from '../services/localStorage';

import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(true);
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (validateEmail(email) && validatePassword(password)) setInvalid(false);
    if (!validateEmail(email) || !validatePassword(password)) setInvalid(true);
  }, [email, password]);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleClick = () => {
    storageMail(email);
    storageTokens();
    setRedirect(true);
  };

  return (
    <div className="primary-container">
      <div className="top">
        <img src="foods-login.jpg" alt="foods-header" />
      </div>
      <div className="input-container">
        <p className="page-title">RecipesApp</p>
        <label htmlFor="email">
          Email
          <br />
          <input
            id="email"
            data-testid="email-input"
            name="email"
            onChange={ handleChange }
            placeholder="yourname@mail.com"
            type="text"
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Password
          <br />
          <input
            id="password"
            data-testid="password-input"
            name="password"
            onChange={ handleChange }
            placeholder="*********"
            type="password"
            value={ password }
          />
        </label>
        <button
          className="btn-signin"
          data-testid="login-submit-btn"
          disabled={ invalid }
          onClick={ handleClick }
          type="button"
        >
          SIGNIN
        </button>
      </div>
      {(redirect) && <Redirect to="/comidas" />}
    </div>
  );
};

export default Login;
