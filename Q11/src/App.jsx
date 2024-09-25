import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import LoginForm from './components/Auth/LoginForm';
import CountrySearch from './components/Country/CountrySearch';
import LogoutButton from './components/Auth/LogoutButton';
import ThemeToggle from './components/ThemeToggle';
import './styles.css';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <ThemeToggle />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/countries" element={<PrivateRoute><CountrySearch /></PrivateRoute>} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

function PrivateRoute({ children }) {
  const { state } = useAuth();
  return state.isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
