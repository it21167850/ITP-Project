import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const AddPackages = () => {

  const histrory = useNavigate();

  const[inputs,setInputs] = useState({
    name: "",
    combinefoods:"",
    description:"",
    price: "",
    
    image1:"",
    image2:"",
    image3:"",

    offer:"",
  
  
   });


   const [checked, setchecked] = useState(false)

   const handleChange = (e) =>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    //console.log(e.target.name,"Value",e.target.value);
  
  }



  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/packages",{
    name:String(inputs.name),
    combinefoods: String(inputs.combinefoods),
    description: String(inputs.description),
    price:Number(inputs.price),
    image1:String(inputs.image1),
    image2:String(inputs.image2),
    image3:String(inputs.image3),
   
    offer:Number(inputs.offer),
  
    available:Boolean(checked)
  
  }).then(res=>res.data);
  
  
  }
  


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>histrory('/packages'));
  }
  

  


  return (

    <div>

<div className="square" style={{
      backgroundImage: 'url("https://www.womenfitness.net/wp/wp-content/uploads/2016/10/fast-food.jpg")',
      padding:'130px',
            
    }} width="750px" height="550px">

                                <p style={{fontSize:"45px"}}>Add Packages</p>     
      
      </div>

    <form onSubmit={handleSubmit}>
      <Box 
      display="flex" 
      flexDirection="column"
       justifyContent={'center'} 
       maxWidth={700}
       alignContent={"center"}
       margin={"auto"}
       marginTop={"10px"}
       >
      <FormLabel>Name</FormLabel>
        <TextField margin='normal' onChange={handleChange} value={inputs.name} fullWidth variant="outlined" name="name"></TextField>


        <FormLabel>Combine foods</FormLabel>
        <TextField margin='normal' onChange={handleChange} value ={inputs.combinefoods}fullWidth variant="outlined" name="combinefoods"></TextField>



        <FormLabel>Description</FormLabel>
        <TextField margin='normal'   onChange={handleChange} value ={inputs.description} fullWidth variant="outlined" name="description"></TextField>


        <FormLabel>Price</FormLabel>
        <TextField type="number" onChange={handleChange} margin='normal' value={inputs.price} fullWidth variant="outlined" name="price"></TextField>



        <FormLabel>Image 1</FormLabel>
        <TextField margin='normal'  onChange={handleChange} value={inputs.image1}fullWidth variant="outlined" name="image1"></TextField>


        <FormLabel>Image 2</FormLabel>
        <TextField margin='normal'  onChange={handleChange} value={inputs.image2}fullWidth variant="outlined" name="image2"></TextField>


        <FormLabel>Image 3</FormLabel>
        <TextField margin='normal'  onChange={handleChange} value={inputs.image3}fullWidth variant="outlined" name="image3"></TextField>



        <FormLabel>Offer</FormLabel>
        <TextField type="number" margin='normal' onChange={handleChange} value={inputs.offer} fullWidth variant="outlined" name="offer"></TextField>
        <FormControlLabel control={
        <Checkbox checked={checked} onChange={()=>setchecked(!checked)}/>
        } 
        label="Confirm" />

      <Button variant='contained' type="submit">Add Package</Button>

        
        </Box>


     </form>
          <br>
          
          </br>

          <br></br>
     <Button LinkComponent={NavLink} to="/" variant='contained' type="submit">Back to Dashboard</Button>
     </div>
 
  )
}

export default AddPackages