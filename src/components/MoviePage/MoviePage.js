import React from 'react'
import './MoviePage.scss'
import { useParams } from 'react-router-dom'

import { useEffect,useState } from 'react'


const MoviePage = () => {

const [movieDetail,setMovieDetail] = useState({});


const {id} = useParams()

console.log(id);



console.log(movieDetail);


useEffect(() => {


  const getMovie = async (id) => {

  const params = new URLSearchParams({i:id,type:'movie',plot:'full'})

  
      try {
  
      const response = await fetch(`http://www.omdbapi.com/?apikey=d8902cf1&${params}`)
      console.log(response);
      if (!response.ok) {
          throw new Error('somtinhg went wrong!!')
        }
      const MovieData = await response.json()
      
      setMovieDetail(MovieData)


      }catch(error) {
  
  
          console.log(error.message)
  
      }
  
    }
  

    getMovie(id);

},[id])





  return (

    <div className='MoviePageContainer'>
        
        
        <div className='imageContainer'>

        <img src={movieDetail.Poster} alt="" />

        </div>
        
        <div className='movieDetail'>
          <h1>{movieDetail.Title}</h1>
          <h3>YEAR  : {movieDetail.Year}</h3>
          <p>{movieDetail.Plot}</p>
          <p>actores:  {movieDetail.Actors}</p>
        </div>
        
        
        </div>



  )
}

export default MoviePage