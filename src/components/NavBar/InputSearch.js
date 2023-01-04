import {IconButton, Input, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch,  } from 'react-redux'
import './InputSearch.scss'
import SearchIcon from '@mui/icons-material/Search';
import { getMoviesApi } from '../apis/apis';
import { getMoviesAction } from '../store/action';




const InputSearch = () => {

  const [movieSearch,setMovieSearch] = useState('')
const dispatch = useDispatch()


const handelOnChange = (event) => {


  setMovieSearch(event.target.value)



}

  const handelOnSubmit = (event) => {

event.preventDefault()


console.log(movieSearch);

const newParamsMovie = new URLSearchParams({s:movieSearch,type:'movie'})

const newSearchMovie = getMoviesApi(newParamsMovie);
console.log(newSearchMovie);


newSearchMovie.then(movies => dispatch(getMoviesAction(movies))).catch(error => console.log(error));


  }



  return (

<div className='InputSearchContianer'>

<form onSubmit={handelOnSubmit}>

<TextField onChange={handelOnChange} value={movieSearch} color="success" size="small" className='inputSearch' id="InputSearch" label="Search a movie" variant="outlined" />
<IconButton type="submit" className='icon' aria-label="delete">
  <SearchIcon />
</IconButton>
</form>

    </div>
  )
}

export default InputSearch