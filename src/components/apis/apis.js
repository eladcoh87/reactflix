
import React from 'react'




const defParams = new URLSearchParams({s:'superman',type:'movie'})
 
export const getMoviesApi = async (getParams = defParams) => {



  console.log('from api func')
console.log(getParams)

const option = {method: 'GET',headers: {  'Content-Type': 'application/json'},mode: 'no-cors'}


    try {


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


