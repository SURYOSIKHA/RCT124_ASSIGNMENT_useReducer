import React, { useReducer, useState } from 'react';

// Initial form state
const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: '',
    state: '',
    locality: {
      pinCode: '',
      landmark: '',
    },
  },
  courses_offered: [],
};

// Reducer function to manage form state
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'SET_ADDRESS_FIELD':
      return {
        ...state,
        address: {
          ...state.address,
          [action.field]: action.payload,
        },
      };
    case 'SET_LOCALITY_FIELD':
      return {
        ...state,
        address: {
          ...state.address,
          locality: {
            ...state.address.locality,
            [action.field]: action.payload,
          },
        },
      };
    case 'SET_COURSES':
      return {
        ...state,
        courses_offered: action.payload,
      };
    case 'reset':
      return initialState;
    default:
      throw new Error('invalid action type');
  }
}

export default function CollegeForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [newCourse, setNewCourse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      // Display the form data or save it
      console.log(state);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleAddCourse = () => {
    if (newCourse.trim() !== '') {
      dispatch({
        type: 'SET_COURSES',
        payload: [...state.courses_offered, newCourse],
      });
      setNewCourse('');
    }
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
    setNewCourse('');
  };

  return (
    <div>
      <h1>Add College</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>College Name: </label>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: 'SET_FIELD', field: 'name', payload: e.target.value })
            }
          />
        </div>

        <div>
          <label>Establishment Year: </label>
          <input
            type="text"
            value={state.establishment_year}
            onChange={(e) =>
              dispatch({
                type: 'SET_FIELD',
                field: 'establishment_year',
                payload: e.target.value,
              })
            }
          />
        </div>

        {/* Address Fields */}
        <h3>Address Details</h3>
        <div>
          <label>Building: </label>
          <input
            type="text"
            value={state.address.building}
            onChange={(e) =>
              dispatch({
                type: 'SET_ADDRESS_FIELD',
                field: 'building',
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Street: </label>
          <input
            type="text"
            value={state.address.street}
            onChange={(e) =>
              dispatch({
                type: 'SET_ADDRESS_FIELD',
                field: 'street',
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            value={state.address.city}
            onChange={(e) =>
              dispatch({
                type: 'SET_ADDRESS_FIELD',
                field: 'city',
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>State: </label>
          <input
            type="text"
            value={state.address.state}
            onChange={(e) =>
              dispatch({
                type: 'SET_ADDRESS_FIELD',
                field: 'state',
                payload: e.target.value,
              })
            }
          />
        </div>
        {/* Locality Fields */}
        <h4>Locality</h4>
        <div>
          <label>Pincode: </label>
          <input
            type="text"
            value={state.address.locality.pinCode}
            onChange={(e) =>
              dispatch({
                type: 'SET_LOCALITY_FIELD',
                field: 'pinCode',
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Landmark: </label>
          <input
            type="text"
            value={state.address.locality.landmark}
            onChange={(e) =>
              dispatch({
                type: 'SET_LOCALITY_FIELD',
                field: 'landmark',
                payload: e.target.value,
              })
            }
          />
        </div>

        {/* Courses Offered */}
        <div>
          <h3>Courses Offered</h3>
          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Add Course"
          />
          <button type="button" onClick={handleAddCourse}>
            Add Course
          </button>
        </div>
        <ul>
          {state.courses_offered.map((course, idx) => (
            <li key={idx}>{course}</li>
          ))}
        </ul>

        {/* Submit Button */}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {/* Display Submitted Form Data */}
      <h2>Submitted College Data:</h2>
      <div>
        <h3>College Details</h3>
        <p><strong>College Name:</strong> {state.name}</p>
        <p><strong>Establishment Year:</strong> {state.establishment_year}</p>
        
        <h3>Address Details</h3>
        <p><strong>Building:</strong> {state.address.building}</p>
        <p><strong>Street:</strong> {state.address.street}</p>
        <p><strong>City:</strong> {state.address.city}</p>
        <p><strong>State:</strong> {state.address.state}</p>
        <p><strong>Pincode:</strong> {state.address.locality.pinCode}</p>
        <p><strong>Landmark:</strong> {state.address.locality.landmark}</p>
        
        <h3>Courses Offered</h3>
        <ul>
          {state.courses_offered.length > 0 ? (
            state.courses_offered.map((course, idx) => (
              <li key={idx}>{course}</li>
            ))
          ) : (
            <li>No courses offered</li>
          )}
        </ul>
      </div>

      {/* Error Message Display */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
