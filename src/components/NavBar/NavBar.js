import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Links from './Links';
import InputSearch from './InputSearch';
import './NavBar.scss'
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { getMoviesApi } from '../apis/apis';
import { getMoviesAction } from '../store/action';
import { useDispatch } from 'react-redux';


const NavBar = () => {

const dispatch = useDispatch()
const [movie,setMovies] = useState('')


const handleChange = (event) => {

console.log(event.target.value);
setMovies(event.target.value);
console.log(movie);
// const newpARAMS = new URLSearchParams({s:movie,type:'movie'})
 
//  const movieData = getMoviesApi(newpARAMS);

//  console.log(movieData);

}
    

useEffect(() => {



if(movie === "") {

  return
}

const newpARAMS = new URLSearchParams({s:movie,type:'movie'})
 
 const movieData = getMoviesApi(newpARAMS);

 (movieData).then(movies => {
  
  if(!movies) {


    throw new Error('somtinhg went wrong!!')

  }

  
  dispatch(getMoviesAction(movies))})
  .catch(error => {
    
    
    console.log(error)
    
  });





},[movie])




  return (



 <AppBar position='static'>
<Toolbar className='toolbar'>



    <Links />
   
    <div className='dropdown'>
    <FormControl className='fromC'>
<InputLabel className='inputEl' id="movie">Choose By the best movies</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="movie"
  value={movie}
  label="movie"
  onChange={handleChange}
>
  <MenuItem value='mafia'>mafia</MenuItem>
  <MenuItem value='black'>black</MenuItem>
  <MenuItem value='gold'>gold</MenuItem>
</Select>
</FormControl>
   

    </div>
    <InputSearch />
    </Toolbar>
    </AppBar>

  )
}

export default NavBar