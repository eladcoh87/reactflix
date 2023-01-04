import React from 'react'



const initialValue = {firstMoviesList:[]}



const moviesReducer = (state = initialValue,action) => {


    switch (action.type) {


        case 'GET_MOVIES':

            console.log(action.payload);

            return {...state,firstMoviesList:action.payload}
            
    
        default:


            return state
    }
    
        
}

export default moviesReducer