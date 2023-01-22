import React from 'react';

const initialValue = { firstMoviesList: [], lastSearchResult: [] };

const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_MOVIES':

      return { ...state, firstMoviesList: action.payload };

    case 'LAST_SEARCH':
      const newlastSearchResult = [action.payload, ...state.lastSearchResult];
      newlastSearchResult.length = 5;
      return { ...state, lastSearchResult: newlastSearchResult };
    default:
      return state;
  }
};

export default moviesReducer;
