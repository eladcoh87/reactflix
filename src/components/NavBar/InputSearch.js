import { IconButton, Input, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './InputSearch.scss';
import SearchIcon from '@mui/icons-material/Search';
import { getMoviesApi } from '../apis/apis';
import { getMoviesAction, updateLastSearch } from '../store/action';
import LastSearchResult from './LastSearchResult';

const InputSearch = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [movieNotFound, setMovieNotFound] = useState(false);

  const dispatch = useDispatch();

  const handelOnChange = (event) => {
    setMovieSearch(event.target.value);
  };

  const handelOnSubmit = (event) => {
    event.preventDefault();

    dispatch(updateLastSearch(movieSearch));

    const newParamsMovie = new URLSearchParams({
      s: movieSearch,
      type: 'movie',
    });

    const newSearchMovie = getMoviesApi(newParamsMovie);
    setMovieSearch('');

    newSearchMovie
      .then((movies) => {
        if (!movies) {
          throw new Error('somtinhg went wrong!!');
        }

        setMovieNotFound(false);
        dispatch(getMoviesAction(movies));
      })
      .catch((error) => {
        console.log(error);

        setMovieNotFound(true);
      });
  };

  return (
    <div className="InputSearchContianer">
      <form onSubmit={handelOnSubmit}>
        <TextField
          error={movieNotFound}
          onChange={handelOnChange}
          value={movieSearch}
          color="success"
          size="small"
          className="inputSearch"
          id="InputSearch"
          label="Search a movie"
          variant="outlined"
        />
        <IconButton type="submit" className="icon" aria-label="delete">
          <SearchIcon />
        </IconButton>
        {movieNotFound && <p>something went wrong can't find the movie</p>}
      </form>
    </div>
  );
};

export default InputSearch;
