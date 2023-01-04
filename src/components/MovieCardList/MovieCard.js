import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import superman from './superman.webp'
import './MovieCard.scss'
import noImage from './NOIMAGE.jpg'
const MovieCard = (props) => {

console.log(props);


const imageGaurd = props.imgUrl === 'N/A' ? noImage : props.imgUrl

  return (


    <Card className='CardContainer'>
      <CardActionArea>
        <CardMedia className='cardImage'
          component="img"
          image= {imageGaurd}
          alt={props.title}
        />
        <CardContent className='CardDiscraption'>
    <h3 className='TextDiscreption'>TITLE : {props.title}</h3>
        
        <p className='TextDiscreption'> Year : {props.year}</p>


        </CardContent>
      </CardActionArea>
    </Card>

  )



}

export default MovieCard