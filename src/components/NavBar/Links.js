import React from 'react'
import { useSelector } from 'react-redux'
import LastSearchResult from './LastSearchResult'
import './Links.scss'
import { Link } from 'react-router-dom'

const Links = () => {

const SearchLastArr = useSelector(state => state.lastSearchResult)

console.log(SearchLastArr.length);



  return (


    <div className='LinksContainer'>

       
          
          
        <Link to="/"> <h3>REACTFLIX</h3></Link>
           
           
         

        <div>

            <Link to="/">Home</Link>

        </div>
        {SearchLastArr.length > 0 && <LastSearchResult /> }
        
    </div>


  )
}

export default Links