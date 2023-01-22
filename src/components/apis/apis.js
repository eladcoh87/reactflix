import React from 'react';

const defParams = new URLSearchParams({ s: 'superman', type: 'movie' });

const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  mode: 'no-cors',
};

export const getMoviesApi = async (getParams = defParams) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=d8902cf1&${getParams}`
    );

    if (!response.ok) {
      throw new Error('somtinhg went wrong!!');
    }

    const { Search } = await response.json();

    return Search;
  } catch (error) {
    console.log(error.message);
  }
};
