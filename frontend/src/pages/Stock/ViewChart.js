import React, { useState } from 'react'
import "./ViewChart.css"
import Barchart from './Barchart'
import {UserData} from './Data'
import { Link } from 'react-router-dom';



export default function ViewChart() {

  // eslint-disable-next-line
  const[userData, setUserData] = useState({  

    labels: UserData.map((data) => data.date) ,

    datasets:[{
      label: "Vegetable",
      data: UserData.map((data) => data.Vegitable),
      backgroundColor: ["blue"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
     
    },
    {
      label: "Fruit",
      data: UserData.map((data) => data.Fruit),
      backgroundColor: ["red"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
    },
    {
      label: "Groceries",
      data: UserData.map((data) => data.groceries),
      backgroundColor: ["green"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
    },
    {
      label: "Others",
      data: UserData.map((data) => data.other),
      backgroundColor: ["pink"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
    },
  ]

  });

  return (
    <div> 
       <p className='stock'> Admin Summery </p>
       <div className='wrapbutns'>
             <button className='Sbtn1'>
             View Summery
            </button>

            <Link to='/AddItem'>
             <button className='Sbtn2'>
              Materials
             </button>
             </Link>

             <button className='Sbtn3'>
              View Stock
             </button>
       </div>
       <div className='chart'>
       <Barchart chartData={userData}/>
       </div>

        
       
       
    
    </div>
  )
}
