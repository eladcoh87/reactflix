
import React from 'react'




const defParams = new URLSearchParams({s:'superman',type:'movie'})

const options = {method: 'GET',headers: {'Content-Type': 'application/json'},mode: 'no-cors'}

export const getMoviesApi = async (getParams = defParams) => {

console.log(getParams);
    try {

    const response = await fetch(`http://www.omdbapi.com/?apikey=d8902cf1&${getParams}`)
      console.log(response);


    if (!response.ok) {
        throw new Error('somtinhg went wrong!!')
      }

      
      
    const {Search} = await response.json()
      console.log(Search);

    return Search

    }catch(error) {

        console.log(error.message)
    }

  }


