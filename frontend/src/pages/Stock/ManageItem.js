import React from 'react'
import "./ManageItem.css";
import { Link } from 'react-router-dom';

export default function ManageItem() {
  return (
    <div>
      <p class='add'>Manage  Materials</p>
      <div className='wrapbutns'>
      <Link to='/ManageItem'>
             <button className='Sbtn1'>
             View Summery
             </button>
             </Link>
            
            <Link to='/ManageItem'>
             <button className='Sbtn2'>
             Materials
             </button>
             </Link>
             <Link to='/stockdash/additem'>
             
             <button className='Sbtn3'>
              View Stock
             </button>
             </Link>
            

         

        

       </div>
       
       <div className='materials'>
       <Link to='/stockdash/additem'>
       <button className='Sbtn4'>
             Vegetables
            </button>
            </Link>
            <Link to='/stockdash/additem'>
            
             <button className='Sbtn5'>
             Fruits
             </button>
             </Link>
             <Link to='/stockdash/additem'>
              
             <button className='Sbtn6'>
             Groceries
             </button>
             </Link>
             <Link to='/AddItem'>
             <button className='Sbtn7'>
             Others
             </button>
             </Link>


       </div>
    </div>
  )
}
