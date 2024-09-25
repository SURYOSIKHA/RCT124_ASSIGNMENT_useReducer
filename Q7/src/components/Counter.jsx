import React, { useReducer } from 'react';

// Step 1: Define the initial state
const initialState = { count: 0 };

// Step 2: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Main component
const CounterApp = () => {
  // Step 3: useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {state.count}</h1>

      {/* Step 4: Dispatch INCREMENT action on button click */}
      <button 
        onClick={() => dispatch({ type: 'INCREMENT' })}
        style={{
          marginRight: '10px',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Increment
      </button>

      {/* Step 4: Dispatch DECREMENT action on button click */}
      <button 
        onClick={() => dispatch({ type: 'DECREMENT' })}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;
