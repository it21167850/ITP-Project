import { Box, Button, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'



const CustOwnMeal = () => {
    const [food1, setfood1] = useState();
    const [food2, setfood2] = useState();
    const [food3, setfood3] = useState();


    const [quantity1, setquantity1] = useState();
    const [quantity2, setquantity2] = useState();
    const [quantity3, setquantity3] = useState();
    const [total, setTotal] = useState();



    const handlesubmit = (e)=>{
     
      setTotal(food1*quantity1+food2*quantity2+food3*quantity3);
      e.preventDefault();
    }




   

    

    return (
    <div>


        <center><h1>Create Your Own Meal</h1></center> 

        <center>     <img src= "https://static.wixstatic.com/media/73a764_e22c40d6c0004a5cbb818d67d81b8f2d~mv2_d_3240_3240_s_4_2.png/v1/fit/w_500,h_500,q_90/file.png" width="250" height="250" /></center>


       




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
   
  ><MenuItem value={0}>None</MenuItem>
    <MenuItem value={650}><  img src="https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:650.00 <br/>  Fried Rice</MenuItem>
   
   
    <MenuItem value={550}><  img src="https://thatswhatshehad.com/wp-content/uploads/2016/05/sri-lankan-rice-and-curry.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:550.00 <br/>  Rice and Curry</MenuItem>
   
   
   
    <MenuItem value={750}><  img src="https://tajfoods.com.au/wp-content/uploads/2018/01/nasi-goreng.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:750.00 <br/>  Nasi goreng Rice</MenuItem>
    

    <MenuItem value={700}><  img src="https://foodyoushouldtry.com/wp-content/uploads/2017/10/kottu.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:700.00 <br/>  Chicken Kottu</MenuItem>

    
    <MenuItem value={650}><  img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Monika_Manchanda/Egg_Kothu_Parantha.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:650.00 <br/>  Egg Kottu</MenuItem>


    <MenuItem value={750}><  img src="https://i.ytimg.com/vi/R1EwMpJNtAw/maxresdefault.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:750.00 <br/>  Cheese Kottu</MenuItem> 


    <MenuItem value={35}><  img src="https://hoppersunlimited.com.au/wp-content/uploads/2020/03/IMG_7505-Copy1.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:35.00 <br/>  Hoppers</MenuItem> 


    


    <MenuItem value={35}><  img src="https://i.ytimg.com/vi/uyGlHOnewcU/maxresdefault.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:35.00 <br/>  Parata</MenuItem> 

    <MenuItem value={50}><  img src="http://3.bp.blogspot.com/_OTkUQ94eCQ8/S9e10-qVwCI/AAAAAAAACoo/xgwQsK2FLgc/s1600/thosai+3+copy.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:50.00 <br/>  Thosai</MenuItem> 




    
    
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
    <MenuItem value={50}><  img src="https://beercastleny.com/wp-content/uploads/2017/11/Mexican-Pepsi-Bottles-12-fl-oz-24ct.jpeg" alt="SWQD" width={150} height={150} /><br/>
    price:50.00 <br/>  Pepsi</MenuItem>

    <MenuItem value={50}><  img src="https://i5.walmartimages.com/asr/2d452d9f-59fc-4ccc-9426-b63531da9c0c_1.7a981fefefcdc925fd63059fb1b3cd69.jpeg" alt="SWQD" width={150} height={150} /><br/>
    price:50.00 <br/>  Coke</MenuItem>

    <MenuItem value={50}><  img src="https://i5.walmartimages.com/asr/a0c52afc-0d31-41fc-bbab-10c8a291b9a5_1.9ace6e31a8f9f62595732c5f52ece1ee.jpeg" alt="SWQD" width={150} height={150} /><br/>
    price:50.00 <br/>  Sprite</MenuItem>

    <MenuItem value={40}><  img src="https://static.oprah.com/images/o2/201405/201405-orig-tea-plain-949x1356.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:40.00 <br/>  Plain Tea</MenuItem>

    <MenuItem value={50}><  img src="http://healthyliving.natureloc.com/wp-content/uploads/2015/07/Milk-Tea-Cup.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:50.00 <br/>  Tea</MenuItem>


    
    
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


    <MenuItem value={150}><  img src="https://www.browneyedbaker.com/wp-content/uploads/2016/08/jenis-chocolate-ice-cream-17-600.jpg" alt="SWQD" width={150} height={150} /><br/>
    price 150.00 <br/> Chocalate Ice cream</MenuItem>



    <MenuItem value={150}><  img src="https://www.bms.co.in/wp-content/uploads/2014/07/Vanilla-Ice-Cream-Day-6.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:150.00 <br/> Vanila Ice Cream </MenuItem>



    <MenuItem value={100}><  img src="https://vanitascorner.com/wp-content/uploads/2019/06/Making-curd.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:100.00 <br/>  Curd </MenuItem>



    <MenuItem value={200}><  img src="https://mealplannerpro.com/images/recipes/recipes/0/567/567163/2187590.jpg" alt="SWQD" width={150} height={150} /><br/>
    price:200.00 <br/>  watalappan</MenuItem>


   
    
   
    
    
    
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

   <center>  <h1>Total Price: {total}</h1></center>

<div 
Style={{marginLeft:"1000px"}}
>
   <Button Style={{marginLeft:"1000px"}} variant="contained" type="submit" > ADD To Cart </Button>
   </div>
</div>
  )
}

export default CustOwnMeal