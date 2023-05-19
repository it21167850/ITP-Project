import { Box, Button, FormLabel, TextField ,Checkbox,FormControlLabel} from '@mui/material';
import React, { useState } from 'react'
import axios from "axios";
import{NavLink, useNavigate} from 'react-router-dom'

const AddFoodItem = () => {

  const histrory = useNavigate();

 const[inputs,setInputs] = useState({
  name: "",
  category:"",
  description:"",
  price: "",
  country:"",
  image:"",

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
  await axios.post("http://localhost:5000/fooditems",{
  name:String(inputs.name),
  category: String(inputs.category),
  description: String(inputs.description),
  price:Number(inputs.price),
  image:String(inputs.image),
  country:String(inputs.country),
  offer:Number(inputs.offer),

  available:Boolean(checked)

}).then(res=>res.data);


}



const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(inputs,checked);
  sendRequest().then(()=>histrory('/fooditems'));
}

  return (

    <div>
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

      <Button variant='contained' type="submit">Add Packages</Button>

        

        
        </Box>


     </form>



<br>
          
</br>

<br></br>
<Button LinkComponent={NavLink} to="/addfooditems" variant='contained' type="submit">Back to Dashboard</Button>
</div>
  )
}


export default AddFoodItem;