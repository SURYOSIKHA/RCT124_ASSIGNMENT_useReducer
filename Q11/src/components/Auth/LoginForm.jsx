import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { email } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
