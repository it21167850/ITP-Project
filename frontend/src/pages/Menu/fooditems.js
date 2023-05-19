

import React , {useEffect,useState}from "react"
import axios from "axios";
import Fooditem from "./Fooditem";
import "./Fooditem.css"
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";



const URL = "http://localhost:5000/fooditems";


const fetchHandler = async()=>{
    return await axios.get(URL).then((res)=>res.data);
};


const Fooditems = () => {

    const [fooditems,setfooditems] = useState();
    useEffect(()=>{
        

            fetchHandler().then((data)=>setfooditems(data.fooditems));


    }, []);

 console.log(fooditems);


  return (
    <div className="bigCard" > 
      
    

      <div className="square" style={{
      backgroundImage: 'url("https://g.foolcdn.com/editorial/images/540667/fast-food-hamburger-fries-drink-getty.jpg")',
      padding:'130px',
            
    }} width="750px" height="550px">

                                <p style={{fontSize:"45px"}}>Fooditems</p>     
      
      </div>






      
    <ul>
      
    
       {fooditems && 
              fooditems.map((fooditem,i)=>(
          <li key={i}> 
              <Fooditem foodItem={fooditem}/>
            </li>

     

    ))} </ul>
    
   < br>
          
</br>

<br></br>

    
    
    
    
    </div> 



  )
}  

export default Fooditems;