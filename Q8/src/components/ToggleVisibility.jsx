import React, { useReducer } from 'react';

// Step 1: Define the initial state
const initialState = { isVisible: false };

// Step 2: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };  // Toggle visibility
    default:
      return state;
  }
};

// Main component
const ToggleMessageApp = () => {
  // Step 3: useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Toggle Message Visibility</h1>

      {/* Step 4: Conditionally render the message */}
      {state.isVisible && <p>Hello, World!</p>}

      {/* Button to toggle visibility */}
      <button
        onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Toggle Message
      </button>
    </div>
  );
};

export default ToggleMessageApp;
