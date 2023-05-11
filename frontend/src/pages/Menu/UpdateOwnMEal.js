import React from 'react'
import { Box, Button, FormLabel, TextField ,Checkbox,FormControlLabel, InputLabel, FormControl, MenuItem, Select} from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
const UpdateOwnMEal = () => {
  const navigate = useNavigate();
  const { id: userID } = useParams();
  

  const [ownMeals, setOwnMeals] = React.useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });
  function singleUser(e) {
    const { name, value } = e.target;
    setOwnMeals((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleFileUpload = async(e) =>{
    const file = e.target.files[0];
    const base64 = await convertToBase64(file)
    setOwnMeals({...ownMeals,image:base64})
  }
  
  
  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/menudash/CustOwnMeal/${userID}`
        );
        setOwnMeals(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [userID]);

  function updateData(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/menudash/CustOwnMeal/${userID}`, ownMeals)
      .then(() => {
        alert("Successfully updated!");
        navigate("/menudash/ViewCustOwnMeal");
      })
      .catch((err) => {
        alert(err);
      });
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
  
    return (
    <div>
      

      <div>
     <form onSubmit={updateData}>
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
        <TextField margin='normal'   fullWidth variant="outlined" name="name"   required="true" onChange={singleUser}
            value={ownMeals.name}></TextField>





{/* 
        <FormLabel>Category</FormLabel>
        <TextField margin='normal' onChange={handleChange} value ={inputs.category}fullWidth variant="outlined" name="category"></TextField> */}





  




    
<InputLabel id="demo-simple-select-label">Potion</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={ownMeals.category}
    label="Potion"
    onChange={singleUser}
    name='category'
  
  
   
  >



<MenuItem value={"MEAL"}>MEAL</MenuItem>
<MenuItem value={"DRINK"}>DRINK</MenuItem>
      
<MenuItem value={"DESERT"}>DESERT</MenuItem>
      

      

    
    
  </Select>
  

       <FormLabel>Price</FormLabel>
        <TextField type="number"  margin='normal'  fullWidth variant="outlined" name="price" required="true" 
        onChange={singleUser}
        value={ownMeals.price}
        ></TextField>




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
<Button  variant='contained' type="submit">Back to Dashboard</Button>













</div>



      
    </div>
  )
}

export default UpdateOwnMEal