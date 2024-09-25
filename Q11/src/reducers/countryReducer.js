export const initialState = {
    countries: {},
    loading: false,
    error: null,
    total: 0,
  };
  
  export function countryReducer(state, action) {
    switch (action.type) {
      case 'FETCH_START':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, countries: action.payload, loading: false, total: action.total };
      case 'FETCH_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  }
  