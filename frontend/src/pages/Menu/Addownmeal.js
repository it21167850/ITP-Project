import { Box, Button, FormLabel, TextField ,Checkbox,FormControlLabel, InputLabel, FormControl, MenuItem, Select, Link} from '@mui/material';
import React, { useState } from 'react'
import axios from "axios";
import{NavLink, useNavigate} from 'react-router-dom'

const Addownmeal = () => {

  const history =useNavigate();
  const[inputs,setInputs] = useState({
    name: "",
   //category:"",
   
    price: "",
  
    image:"",
  
  
  
  
   });






  const [cat, setCat] = useState();

 


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


// const validate = () => {
//   let errors = {};

//   if (!inputs.name) {
//     errors.name = "Name is required";
//   }

//   if (!inputs.category) {
//     errors.category = "Category is required";
//   }

//   if (!inputs.price) {
//     errors.price = "Price is required";
//   }

//   return errors;
// }


const handleSubmit = (e) =>{
  e.preventDefault();

   
 history("/menudash/ViewCustOwnMeal")
    sendRequest();
}




  return (







    <div>


          <center> Update Custom food item  </center>

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
     
        <TextField margin='normal' placeholder="Name" onChange={handleChange} value={inputs.name} fullWidth variant="outlined" name="name" required="true"
      ></TextField>





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
        placeholder='Potion'
  
  
   
  >



<MenuItem value={"MEAL"}>MEAL</MenuItem>
<MenuItem value={"DRINK"}>DRINK</MenuItem>
      
<MenuItem value={"DESERT"}>DESERT</MenuItem>
      

      

    
    
  </Select>

       
        <TextField type="number" placeholder="Price" onChange={handleChange} margin='normal' value={inputs.price} fullWidth variant="outlined" name="price" required="true" 
      ></TextField>




        <label htmlFor="stdAge" className ="form-label" style={{color:"black"}}>Image</label>
                    <input type="file" className ="form-control" id="stdAge" name="image" placeholder="Image.." accept=".jpeg, .png, .jpg" onChange ={(e)=> handleFileUpload(e)}/>










{/*         

        <FormLabel>Image</FormLabel>
        <TextField margin='normal'  onChange={handleChange} value={inputs.image}fullWidth variant="outlined" name="image" required="true"></TextField> */}



        
{/*   
        <Link to = {'/menudash/ViewCustOwnMeal'}>
      <Button variant='contained' type="submit">Add Food Item</Button>
      </Link> */}
        <Link to="/menudash/ViewCustOwnMeal">
        <Button variant='contained' type="submit">Add Food Item</Button>
        </Link>
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