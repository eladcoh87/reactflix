
import React from 'react'



export const getMoviesApi = async () => {


    try {
    const getParams = new URLSearchParams({s:'king kong',type:'movie'})

    const response = await fetch(`http://www.omdbapi.com/?apikey=d8902cf1&${getParams}`)
    if (!response.ok) {
        throw new Error('somtinhg went wrong!!')
      }
    const {Search} = await response.json()


    return Search

    }catch(error) {


        console.log(error.message)

    }

  }


  