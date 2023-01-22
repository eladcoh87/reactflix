import React from 'react';

export const getMoviesAction = (Search) => {
  return { type: 'GET_MOVIES', payload: Search };
};

export const updateLastSearch = (Search) => {
  return { type: 'LAST_SEARCH', payload: Search };
};
