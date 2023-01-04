import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Links from './Links';
import InputSearch from './InputSearch';

import './NavBar.scss'
const index = () => {

    
  return (



      <AppBar position='static'>
<Toolbar className='toolbar'>



    <Links />
    <InputSearch />



    </Toolbar>
    </AppBar>

  )
}

export default index