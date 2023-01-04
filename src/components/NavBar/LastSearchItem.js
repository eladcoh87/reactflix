import React from 'react'
import './LastSearchItem.scss'
import { getMoviesApi } from '../apis/apis';
import { useDispatch } from 'react-redux';
import { getMoviesAction } from '../store/action';









const LastSearchItem = ({SearchKeyWord}) => {

    console.log(SearchKeyWord);
const dispatch =  useDispatch()

const handelOnClick = (event) => {


    const newParamsMovie = new URLSearchParams({s:SearchKeyWord,type:'movie'})

const LastSearchMovieData = getMoviesApi(newParamsMovie)
    
console.log(LastSearchMovieData);


LastSearchMovieData.then(movies => {
  

    if(!movies) {
  
  
      throw new Error('somtinhg went wrong!!')
  
    }
  
    
    dispatch(getMoviesAction(movies))})
    .catch(error => {
      
      
      console.log(error)
      
    });


}




  return (


    <button onClick={handelOnClick} className='lastSearchBtn'>{SearchKeyWord}</button>


  )
}

export default LastSearchItem