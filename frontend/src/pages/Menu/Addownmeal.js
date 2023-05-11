import { Box, Button, FormLabel, TextField ,Checkbox,FormControlLabel, InputLabel, FormControl, MenuItem, Select} from '@mui/material';
import React, { useState } from 'react'
import axios from "axios";
import{NavLink, useNavigate} from 'react-router-dom'

const Addownmeal = () => {

 






  const [cat, setCat] = useState();

 const[inputs,setInputs] = useState({
  name: "",
 //category:"",
 
  price: "",

  image:"",




 });


 const handleFileUpload = async(e) =>{
  const file = e.target.files[0];
  const base64 = await convertToBase64(file)
  setInputs({...inputs,image:base64})
}




 function convertToBase64(file){
  return new Promise((resolve,reject) =>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
          resolve(fileReader.result)
      }
  })
}







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
 //category: String(inputs.category),

 category: String(cat),
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
        <TextField margin='normal' onChange={handleChange} value={inputs.name} fullWidth variant="outlined" name="name"   required="true"></TextField>





{/* 
        <FormLabel>Category</FormLabel>
        <TextField margin='normal' onChange={handleChange} value ={inputs.category}fullWidth variant="outlined" name="category"></TextField> */}





  





      
  <InputLabel id="demo-simple-select-label">Potion</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={cat}
    label="Potion"
    onChange={e=>setCat(e.target.value)}
    
  
  
   
  >



<MenuItem value={"MEAL"}>MEAL</MenuItem>
<MenuItem value={"DRINK"}>DRINK</MenuItem>
      
<MenuItem value={"DESERT"}>DESERT</MenuItem>
      

      

    
    
  </Select>

       <FormLabel>Price</FormLabel>
        <TextField type="number" onChange={handleChange} margin='normal' value={inputs.price} fullWidth variant="outlined" name="price" required="true"></TextField>




        <label htmlFor="stdAge" className ="form-label" style={{color:"black"}}>Image</label>
                    <input type="file" className ="form-control" id="stdAge" name="image" placeholder="Image.." accept=".jpeg, .png, .jpg" onChange ={(e)=> handleFileUpload(e)}/>










{/*         

        <FormLabel>Image</FormLabel>
        <TextField margin='normal'  onChange={handleChange} value={inputs.image}fullWidth variant="outlined" name="image" required="true"></TextField> */}



        
  

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