import { StyledForm } from './Form.style';
import React, { useState } from 'react';

function Form({ onData }) {
  const [error, setError] = useState({
    login: false,
    password: false,
  });
  const [fromValue, setFromValue] = useState({
    login: '',
    password: '',
  });

  const hendleInput = (e) => {
    e.preventDefault();
    setError(false);
    setFromValue({
      ...fromValue,
      [e.target.name]: e.target.value,
    });
  };

  const hendleSumbint = (e) => {
    e.preventDefault();
    if (fromValue.login.trim().length > 0) {
      if (fromValue.password.trim().length > 5) {
        onData(fromValue);
        setFromValue({
          login: '',
          password: '',
        });
      } else {
        setError({ password: true });
      }
    } else {
      setError({ login: true });
    }
  };

  return (
    <StyledForm error={error} onSubmit={hendleSumbint}>
      <label htmlFor="login" name="login">
        Login
      </label>
      <input type="text" id="login" name="login" value={fromValue.login} onChange={hendleInput} className="login"></input>
      <p className="login-info"> Coś jest nie tak z loginem chyba za krótki</p>
      <label htmlFor="password" name="password">
        Hasło
      </label>
      <input type="text" id="password" name="password" value={fromValue.password} onChange={hendleInput} className="password"></input>
      <p className="password-info">hasło jest na krótkie min 6 zanków</p>

      <button type="submit">Login</button>
    </StyledForm>
  );
}

export default Form;
