import React from 'react'
import MovieCard from './MovieCard'
import './MovieCardList.scss'
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesApi } from '../apis/apis.js';
import { getMoviesAction } from '../store/action';
import { Link } from 'react-router-dom';


const MovieCardList = () => {

const dispatch = useDispatch();

const movieList =  useSelector(state => state.firstMoviesList)

console.log(movieList);
  

useEffect(() => {



const movies = getMoviesApi();


console.log(movies);

  movies.then(movies => dispatch(getMoviesAction(movies))).catch(error => console.log(error));


  },[])




const renderMovieList = movieList.map((movie => <Grid item key={movie.imdbID}>
  
  
  <Link to={`MoviePageDetail/${movie.imdbID}`}>


   <MovieCard title={movie.Title} year={movie.Year} id={movie.imdbID} imgUrl={movie.Poster} /> 
   
   
   </Link>
  
   
   </Grid>  
))


  

  return (


    <div className='movieListContainer'>
      <div className='hedline'>
        
        {movieList.length > 0 && <h1>SEARCH RESULT : {movieList[0].Title} </h1>}
       
        </div>
      


      <Grid className='GridCardContainer' container spacing={2}>
      
      
{renderMovieList}

      </Grid>
      
      </div>
  )



}

export default MovieCardList