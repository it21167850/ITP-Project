import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const ViewSingleOwn = (props) => {


    const{_id,name,category,image,price} = props.omeal;

  return (
    <div style={{backgroundColor:"lightgreen"}}>
 <img classNamee="sub"src={image} alt={name}  width="250" height="250"/>
       
        <h6>{name}</h6>
        <h6>{category}</h6>
        <h6>{price}</h6>
        <Button variant="contained" >update</Button>
        <br></br>
        <Button  variant="contained" >delete</Button>
      




       


        <br></br>
        <br></br>
        <br></br>






    </div>
  )
}

export default ViewSingleOwn