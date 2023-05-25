import React from 'react'
import {Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Fooditem.css"



const Fooditem = (props) => {
 const history = useNavigate();
 const {_id,name,category,description,price,country,image,offer} =props.foodItem;
   const deleteHandler = async()=>{
   await axios.delete(`http://localhost:5000/fooditems/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/fooditems"));
   };
 return (
    <div   className="card"  > 
        <img src={image} alt={name} width="250px" height="250px"/>

        

      <h2>{name} </h2>
      <h3>{price}</h3>
        <p>{category}</p>
        <p>{description}</p>
        
        <p>{country}</p>
       
        <p>{offer}</p>
        <Button variant="contained" LinkComponent={Link} to={`/fooditems/${_id}`} sx={{mt:"auto"}}>update</Button>
        <br></br>
        <Button  variant="contained" onClick ={deleteHandler}sx={{mt:"auto"}}>delete</Button>

    </div>
  )
}

export default Fooditem