


const defParams = new URLSearchParams({s:'superman',type:'movie'})
const defoptions = {method: 'GET',headers: {'Content-Type': 'application/json'},mode: 'no-cors'}



export const getMoviesApi = async (getParams = defParams,options = defoptions) => { 

    try {

    const response = await fetch(`http://www.omdbapi.com/?apikey=d8902cf1&${getParams}`,options)
    
    if (!response.ok) {
        throw new Error('somtinhg went wrong!!')
      }
    const {Search} = await response.json()


    return Search

    }catch(error) {

        console.log(error.message)
    }

  }





  const defParamsV2 = new URLSearchParams({s:'superman',type:'movie'})
  const defoptionsV2 = {method: 'GET',headers: {'Content-Type': 'application/json'},mode: 'no-cors'}
const defEndPoint = 'fixtures/statistics';


  export const getMoviesApi2 = async (endpoint = defEndPoint,getParams = defParamsV2,options = defoptionsV2) => { 

    try {

    const response = await fetch(`'https://api-football-v1.p.rapidapi.com/v3/${endpoint}?${getParams}`,options)
    
    if (!response.ok) {
        throw new Error('somtinhg went wrong!!')
      }
    const {Search} = await response.json()


    return Search

    }catch(error) {

        console.log(error.message)
    }

  }
