import { Box, Button, FormLabel, TextField ,Checkbox,FormControlLabel, InputLabel, FormControl, MenuItem, Select} from '@mui/material';
import React, { useState } from 'react'
import axios from "axios";
import{NavLink, useNavigate} from 'react-router-dom'

const Addownmeal = () => {

 

 const[inputs,setInputs] = useState({
  name: "",
  category:"",
 
  price: "",

  image:"",




 });





const handleChange = (e) =>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
  }));
  //console.log(e.target.name,"Value",e.target.value);

}


const sendRequest = async() =>{
  await axios.post("http://localhost:5000/menudash/CustOwnMeal",{
  name:String(inputs.name),
  category: String(inputs.category),
 
  price:Number(inputs.price),
  image:String(inputs.image),
 


}).then(res=>res.data);


}



const handleSubmit = (e) =>{
  e.preventDefault();

  sendRequest();
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





        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Potion</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value="hi"
    label="Potion"
  
   
  >



<MenuItem value={0}>None</MenuItem>
<MenuItem value={78}>byd</MenuItem>
      
<MenuItem value={675}>None</MenuItem>
      

      

    
    
  </Select>
</FormControl>







































        <FormLabel>Price</FormLabel>
        <TextField type="number" onChange={handleChange} margin='normal' value={inputs.price} fullWidth variant="outlined" name="price"></TextField>


        

        <FormLabel>Image</FormLabel>
        <TextField margin='normal'  onChange={handleChange} value={inputs.image}fullWidth variant="outlined" name="image"></TextField>



        
  

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

export default Addownmeal