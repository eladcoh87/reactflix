import { FormControl, FormHelperText, IconButton, Input, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './InputSearch.scss'
import SearchIcon from '@mui/icons-material/Search';




const InputSearch = () => {

  const [movieSearch,setMovieSearch] = useState('')



const handelOnChange = (event) => {


  setMovieSearch(event.target.value)



}

  const handelOnSubmit = (event) => {

event.preventDefault()


console.log(movieSearch);


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