import { Box, Button, Card, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState , useEffect} from 'react'

import axios from "axios";
import SingleMeal from './SingleMeal';
import { width } from '@mui/system';





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
 

  setTotal(food1.price*quantity1+food2.price*quantity2+food3.price*quantity3||0)
  setData1(food1?.name+"X"+quantity1+" "+food2?.name+"X"+quantity2+" "+food3?.name+"X"+quantity3)

}

    const handlesubmit = (e)=>{
     
 e.preventDefault();
 sendRequest();

 }
return (
 

<div style={{backgroundImage:"url('https://i.pinimg.com/originals/a1/34/22/a13422ec6437ea3b036875cd7880c65c.jpg')"
}}>
        <center><div style={{color:"white"}}><h1>Create Your Own Meal</h1></div></center> 

        <center>    </center>


<div style={{backgroundColor:"white",width:"130vh" , marginLeft:"40vh", paddingTop:"3vh",paddingBottom:"3vh" , borderRadius:"7vh"}}> 

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
    required="true"
   
  >
    
    
    
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
  required="true"
 
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
    required="true"
   
  >


      
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
  required="true"
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
    required="true"
  >




      
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
  required="true"

/>


       
        <TextField margin='normal' onChange={handleChange} value={inputs.name} fullWidth variant="outlined" name="name" placeholder="Name"  required="true"></TextField>
        <TextField margin='normal' onChange={handleChange}  value={inputs.email} fullWidth variant="outlined" name="email" placeholder="email"  required="true"></TextField>
       <TextField margin='normal' onChange={handleChange}  value={inputs.address} fullWidth variant="outlined" name="address" placeholder="address"  required="true"></TextField>
       <TextField margin='normal' onChange={handleChange}  value={inputs.phone} fullWidth variant="outlined" name="phone"   placeholder="phone" required="true"></TextField>

<br/>
      <br/>

      <Button variant="contained" type="submit" > Set Order </Button>
       </Box>


     </form>
     </div>

<br></br>
<br></br>

   <center>
          <h1>Total = {total}</h1>
          <h1>ORdered food = {data1}</h1>
          </center>

<div 
Style={{marginLeft:"1000px"}}
>
  
   </div>
</div>

  )
}

export default CustOwnMeal