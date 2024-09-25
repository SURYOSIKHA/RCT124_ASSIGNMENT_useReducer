import React from 'react';
import { useAuth } from '../../context/AuthContext';

function LogoutButton() {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
