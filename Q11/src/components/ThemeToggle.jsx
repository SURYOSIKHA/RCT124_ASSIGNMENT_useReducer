import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

export default ThemeToggle;
