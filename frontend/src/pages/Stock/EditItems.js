import React, { useState } from 'react'
import "./AddItem.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function EditItems() {

  
  const location = useLocation()

  const details = location.state.items 

  // console.log(details)

  // const details= {
  //     // code:codes,
  //     // name: names,
  //     // price: prices,
  //     // quantity: quantitys,
  //     // materials: materialss,
  //     // value: values
  // };



      const[code,setCode] = useState(details.itemCode)
      const[name,setName] = useState(details.itemName)
      const[date,setDate] = useState(details.date)
      const[purchase,setPurchase] = useState(details. stockin)
      const[sold,setSold] = useState(details.stockout)
      const[quantityInStock,setQuantityInStock] = useState(details.quantityInStock)
      const[reorderlevel,setReorderlevel] = useState(details.reorderlevel)
      const[itemList,setItemList] = useState([])

      const navigate = useNavigate()
      const goBack = (e)=>navigate("/stockdash/report")

  return (
    
    <div>  
      <h1>EDIT ITEM</h1>
      
      <form onSubmit={(e)=>{
            e.preventDefault()
            const newProduct = {
                itemID : details._id, 
                itemCode : code,
                itemName : name,
                date : date,
                stockin:purchase,
                stockout:sold,
                quantityInStock: quantityInStock,
                reorderlevel:reorderlevel,
                
                
                
            }
            axios.put("http://localhost:5000/stock/update",newProduct).then((response)=>{
                goBack()
            })
            }}>

            <div className='form-content'>


            <label htmlFor='Code'>Code</label>
            <input type='text' value={code} id='Code' onChange={(e)=> { setCode(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Name'>Name</label>
            <input type='text' value={name} id='Name' onChange={(e)=> { setName(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Date'>Date</label>
            <input type='date' value={date} id='Date' onChange={(e)=> { setDate(e.target.value);}} className='Blank1' required/>
            
            <label htmlFor='Purchase'>Purchase</label>            
            <input type='text' value={purchase} id='Purchase' onChange={(e)=> { setPurchase(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Sold'>Sold</label>            
            <input type='text' value={sold} id='Sold' onChange={(e)=> { setSold(e.target.value);}} className='Blank1' required/>

            <label htmlFor='QuantityInStock'>Quantity in Stock</label>
            <input type='text' value={quantityInStock} id='QuantityInStock' onChange={(e) => { setQuantityInStock(e.target.value); }} className='Blank1' required />
            
            <label htmlFor='Reorderlevel'>Reorderlevel</label>
            <input type='text' value={reorderlevel} id='Reorderlevel' onChange={(e)=> { setReorderlevel(e.target.value);}} className='Blank1' required/>


           <div className='twoBtn'>
         
            <button type='cancel' onClick={(e) => {
              e.preventDefault();
              goBack();
            }} className='C1'>  Cancel </button>
          
           
            
                 
            <button type='submit' className='a1'>Update</button>
           
           
            </div>
            </div>

      </form>
            

</div>         
)
}

