


import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Fooditem.css"

const Fooditemdetail = () => {
const [inputs, setInputs] = useState({});

const history = useNavigate();

  const id = useParams().id;
  const [checked,setchecked] =useState(false);
  console.log(id);

  useEffect(()=>{
      const fetchHandler = async()=>{
         await axios.get(`http://localhost:5000/fooditems/${id}`)
         .then((res=>res.data) ).then(data=>setInputs(data.fooditems));
      };
      fetchHandler();
      
  },[id]);


const sendRequest = async() =>{
      await axios.put(`http://localhost:5000/fooditems/${id}`,{
         name:String(inputs.name),
         category: String(inputs.category),
         description: String(inputs.description),
         price:Number(inputs.price),
         image:String(inputs.image),
         country:String(inputs.country),
         offer:Number(inputs.offer),
       
         confirm:Boolean(checked)

      }).then(res=>res.data)
}
  
  
  const handleSubmit = (e) =>{
   e.preventDefault();
   sendRequest().then(()=>history("/fooditems"));



}

   const handleChange =(e) =>{


      setInputs((prevState)=>({
         ...prevState,
         [e.target.name]: e.target.value
       }));







      
   }
  
  
   return (
    <div>

           
      <div className="square" style={{
      backgroundImage: 'url("https://g.foolcdn.com/editorial/images/540667/fast-food-hamburger-fries-drink-getty.jpg")',
      padding:'130px',
            
    }} width="750px" height="550px">

                                <p style={{fontSize:"45px"}}>Update Food item</p>     
      
      </div>



      { inputs && (<form onSubmit={handleSubmit}>
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


        <FormLabel>Category</FormLabel>
        <TextField margin='normal' onChange={handleChange} value ={inputs.category}fullWidth variant="outlined" name="category"></TextField>



        <FormLabel>Description</FormLabel>
        <TextField margin='normal'   onChange={handleChange} value ={inputs.description} fullWidth variant="outlined" name="description"></TextField>


        <FormLabel>Price</FormLabel>
        <TextField type="number" onChange={handleChange} margin='normal' value={inputs.price} fullWidth variant="outlined" name="price"></TextField>


        <FormLabel>Country</FormLabel>
        <TextField margin='normal' onChange={handleChange} value={inputs.country} fullWidth variant="outlined" name="country"></TextField>

        <FormLabel>Image</FormLabel>
        <TextField margin='normal'  onChange={handleChange} value={inputs.image}fullWidth variant="outlined" name="image"></TextField>



        <FormLabel>Offer</FormLabel>
        <TextField type="number" margin='normal' onChange={handleChange} value={inputs.offer} fullWidth variant="outlined" name="offer"></TextField>
        <FormControlLabel control={
        <Checkbox checked={checked} onChange={()=>setchecked(!checked)}/>
        } 
        label="Confirm" />

      <Button variant='contained' type="submit">Update Food items</Button>

        
        </Box>


     </form>
        ) }


    </div>
  )
}

export default Fooditemdetail





































/*import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const Fooditemdetail = () => {

const [inputs, setinputs] = useState({});

    const id = useParams().id;
    const [checked,setchecked] =useState(false);
    const history = useNavigate();

    useEffect(()=>{
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:5000/fooditems/${id}`)
            .then((res)=>res.data)
            .then(data=>setinputs(data.fooditem));
        };
        fetchHandler()
    },[id]);


      const sendRequest = async()=>{
         await axios.put(`http://localhost:5000/fooditems/${id}`,{
            name:String(inputs.name),
  category: String(inputs.category),
  description: String(inputs.description),
  price:Number(inputs.price),
  image:String(inputs.image),
  country:String(inputs.country),
  offer:Number(inputs.offer),
         })
      }






 const handleSubmit = (e)=>{
    e.preventDefault();
    sendRequest().then(()=>history("/fooditems"))

 }
 
 const handleChange = (e)=>{
    setinputs((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
 };

    return (
    <div>{inputs && <form onSubmit={handleSubmit}>
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


      <FormLabel>Category</FormLabel>
      <TextField margin='normal' onChange={handleChange} value ={inputs.category}fullWidth variant="outlined" name="category"></TextField>



      <FormLabel>Description</FormLabel>
      <TextField margin='normal'   onChange={handleChange} value ={inputs.description} fullWidth variant="outlined" name="description"></TextField>


      <FormLabel>Price</FormLabel>
      <TextField type="number" onChange={handleChange} margin='normal' value={inputs.price} fullWidth variant="outlined" name="price"></TextField>


      <FormLabel>Country</FormLabel>
      <TextField margin='normal' onChange={handleChange} value={inputs.country} fullWidth variant="outlined" name="country"></TextField>

      <FormLabel>Image</FormLabel>
      <TextField margin='normal'  onChange={handleChange} value={inputs.image}fullWidth variant="outlined" name="image"></TextField>



      <FormLabel>Offer</FormLabel>
      <TextField margin='normal' onChange={handleChange} value={inputs.offer} fullWidth variant="outlined" name="offer"></TextField>
      <FormControlLabel control={
      <Checkbox checked={checked} onChange={()=>setchecked(!checked)}/>
      } 
      label="Confirm" />

    <Button variant='contained' type="submit">Update Book</Button>

      
      </Box>


   </form>}</div>
  )
}

export default Fooditemdetail*/