import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', {
      email
    });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{' '}
        <strong>talentos</strong> para sua empresa.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="seu melhor e-mail"
          onChange={handleEmailChange}
          value={email}
        />
        <button className="btn" type="submit">
          entrar
        </button>
      </form>
    </>
  );
}
