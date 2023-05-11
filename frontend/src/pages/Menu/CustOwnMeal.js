import { Box, Button, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState , useEffect} from 'react'

import axios from "axios";
import SingleMeal from './SingleMeal';





const URL = "http://localhost:5000/menudash/CustOwnMeal"


const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=>res.data);
};



const CustOwnMeal = (propss) => {

  const [food1, setfood1] = useState();
  const [food2, setfood2] = useState();
  const [food3, setfood3] = useState();
 
 
  const [quantity1, setquantity1] = useState();
  const [quantity2, setquantity2] = useState();
  const [quantity3, setquantity3] = useState();
  const [total, setTotal] = useState();
 
 
  const[data1,setData1] = useState();

 
 




// const handleChange = (e) =>{
//   setInputs((prevState)=>({
//     ...prevState,
//     [e.target.name]: e.target.value
//   }));
//   //console.log(e.target.name,"Value",e.target.value);

// }

const sendRequest = async() =>{
  await axios.post("http://localhost:5000/OrderForm",{
  name:String(inputs.name),
  email:String(inputs.email),
  Address:String(inputs.address),
  Phone:Number(inputs.phone),

  total:String(total),

 
  orderedfood:String(data1)
 
 
 


}).then(res=>res.data);


}





  

  const [ownMeals,setOwnMeals] = useState();
  useEffect(()=>{
      

          fetchHandler().then((data)=>setOwnMeals(data.omeal));


  }, []);

 console.log(ownMeals);







 const[inputs,setInputs] = useState({
  name: "",
 //category:"",
 
  email: "",

  phone:"",

  address:""




 });

 const handleChange = (e) =>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value
  }));
  //console.log(e.target.name,"Value",e.target.value);

}

    const handlesubmit = (e)=>{
     
      setTotal(food1.price*quantity1+food2.price*quantity2+food3.price*quantity3)
      setData1(food1?.name+"X"+quantity1+" "+food2?.name+"X"+quantity2+" "+food3?.name+"X"+quantity3)
      //setTotal(food1*quantity1+food2*quantity2+food3*quantity3);

 e.preventDefault();

  sendRequest();



    
 }




   

    

    return (
    <div>


        <center><h1>Create Your Own Meal</h1></center> 

        <center>     <img src= "https://static.wixstatic.com/media/73a764_e22c40d6c0004a5cbb818d67d81b8f2d~mv2_d_3240_3240_s_4_2.png/v1/fit/w_500,h_500,q_90/file.png" width="250" height="250" /></center>



        <FormLabel>Name</FormLabel>
        <TextField margin='normal' onChange={handleChange} value={inputs.name} fullWidth variant="outlined" name="name"   required="true"></TextField>
       
        <FormLabel>Email</FormLabel>
        <TextField margin='normal' onChange={handleChange}  value={inputs.email} fullWidth variant="outlined" name="email"   required="true"></TextField>
        
        <FormLabel>Address</FormLabel>
        <TextField margin='normal' onChange={handleChange}  value={inputs.address} fullWidth variant="outlined" name="address"   required="true"></TextField>

        <FormLabel>Phone</FormLabel>
        <TextField margin='normal' onChange={handleChange}  value={inputs.phone} fullWidth variant="outlined" name="phone"   required="true"></TextField>



<form onSubmit={handlesubmit}>
      <Box
      display="flex" 
      flexDirection="column"
       justifyContent={'center'} 
       maxWidth={700}
       alignContent={"center"}
       margin={"auto"}
       marginTop={"10px"}
       >



<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Potion</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={food1}
    label="Potion"
    onChange={e=>setfood1(e.target.value)}
   
  >
    <MenuItem value={0}>None</MenuItem>
    
    
    {ownMeals && ownMeals.map((Owmeal, i) => (
  Owmeal.category === "MEAL" ? (
    <MenuItem value={Owmeal} key={i}>
      <SingleMeal Smeal={Owmeal} />
    </MenuItem>
  ) : null
))}




    
    
  </Select>
</FormControl>

<br/>


<TextField
  id="outlined-uncontrolled"
  label="Quantity"
  value={quantity1}
  onChange={e=>setquantity1(e.target.value)}
  type='Number'
 
/>

<br/>
<br/>
<br/>



<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Potion</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={food2}
    label="Potion"
    onChange={e=>setfood2(e.target.value)}
   
  >


<MenuItem value={0}>None</MenuItem>
      
{ownMeals && ownMeals.map((Owmeal, i) => (
  Owmeal.category === "DRINK" ? (
    <MenuItem value={Owmeal} key={i}>
      <SingleMeal Smeal={Owmeal} />
    </MenuItem>
  ) : null
))}

    
    
  </Select>
</FormControl>

<br/>


<TextField
  id="outlined-uncontrolled"
  label="Quantity"
  value={quantity2}
  onChange={e=>setquantity2(e.target.value)}
  type='Number'
 
/>

<br/>
<br/>
<br/>




<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Potion</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={food3}
    label="Potion"
    onChange={e=>setfood3(e.target.value)}
   
  >



<MenuItem value={0}>None</MenuItem>
      
{ownMeals && ownMeals.map((Owmeal, i) => (
  Owmeal.category === "DESERT" ? (
    <MenuItem value={Owmeal} key={i}>
      <SingleMeal Smeal={Owmeal} />
    </MenuItem>
  ) : null
))}

    
    
    
  </Select>
</FormControl>

<br/>


<TextField
  id="outlined-uncontrolled"
  label="Quantity"
  value={quantity3}
  onChange={e=>setquantity3(e.target.value)}
  type='Number'
 
/>





<br/>
      <br/>



      <Button variant="contained" type="submit" > Calculate </Button>
      
      
        </Box>


     </form>

<br></br>
<br></br>

   <center>
          <h1>Total = {total}</h1>
          <h1>ORdered food = {data1}</h1>
          </center>


<div 
Style={{marginLeft:"1000px"}}
>
   <Button Style={{marginLeft:"1000px"}} variant="contained" type="submit" > ADD To Cart </Button>
   </div>
</div>
  )
}

export default CustOwnMeal