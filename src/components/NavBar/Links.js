import React from 'react'
import { useSelector } from 'react-redux'
import LastSearchResult from './LastSearchResult'
import './Links.scss'


const Links = () => {

const SearchLastArr = useSelector(state => state.lastSearchResult)

console.log(SearchLastArr.length);

  return (


    <div className='LinksContainer'>

        <div> <h3>REACTFLIX</h3></div>

        <div>
            <a href="#">Home</a>
            <a href="#">movies</a>
            <a href="#">help</a>

        </div>
        {SearchLastArr.length > 0 && <LastSearchResult /> }
        
    </div>


  )
}

export default Links