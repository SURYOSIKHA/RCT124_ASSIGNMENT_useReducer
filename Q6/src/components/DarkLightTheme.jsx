import React, { useReducer } from 'react';

// Step 1: Define the initial state
const initialState = {
  theme: 'light',  // Theme is either 'light' or 'dark'
};

// Step 2: Define the reducer function to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// Main component
const ThemeToggleApp = () => {
  // Step 3: useReducer hook, passing the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Step 4: Apply styles based on the current theme
  const appStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
  };

  return (
    <div style={appStyles}>
      <div>
        <h1>{state.theme.toUpperCase()} THEME</h1>
        {/* Step 5: Dispatch the TOGGLE_THEME action on button click */}
        <button
          onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggleApp;
