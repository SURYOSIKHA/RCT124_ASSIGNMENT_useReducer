import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import CountryItem from './CountryItem';
import { countryReducer, initialState } from '../../reducers/countryReducer';

function CountrySearch() {
  const [state, dispatch] = useReducer(countryReducer, initialState);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCountries = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await axios.get(`https://api.first.org/data/v1/countries?offset=${(page - 1) * 10}&limit=10&search=${searchQuery}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.data, total: response.data.total });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchCountries();
  }, [searchQuery, page]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      <ul>
        {Object.entries(state.countries).map(([code, { country }]) => (
          <CountryItem key={code} name={country} />
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={state.countries.length < 10}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CountrySearch;
