import React, { useEffect, useState } from 'react'
import "./Report.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'

export default function Report() {

  const[items, setItems] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }


    useEffect(() => {
      const getData = () => {
        axios.get("http://localhost:5000/stock/view").then((res) => {
          setItems(res.data);
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        })
      }
      getData();
    },[])



console.log(items)
  return (
    <div>
        <p className='report'> Final Report</p>
        <div className='wrapbutns'>
        <Link to='/'>
             <button className='Sbtn1'>
             View Summery
            </button>
            </Link>
            <Link to='/AddItem'>
             <button className='Sbtn2'>
              Materials
             </button>
             </Link>
             <Link to='/Report'>
             <button className='Sbtn3'>
              View Stock 
             </button>
             </Link>
             <div className='table'>
              <table border="1">
                

                <tr> <td> Item Code</td><td> Item Name</td><td>Date</td> <td>Unit Price</td> <td> stock in</td><td>Stock out</td><td>Quantity in stock</td><td>Re order level</td><td>Inventery Value</td><td>Action</td></tr>

                {items.map((item, ids) => {       
                  return(
                    <tr> 
                      <td> {item.itemCode}</td>
                      <td> {item.itemName}</td>
                      <td>{item.date}</td> 
                      <td>{item.amountunitPrice}</td> 
                      <td>{item.stockin}</td>
                      <td>{item.stockout}</td>
                      <td>{item.quantityInStoc}</td>
                      <td>{item.reorderlevel}</td> 
                      <td>{item.inventeryvalue}</td>

                      <td><Link to="/editItems" state ={{items: item}}>
                        {console.log("This is item")}
                        {console.log({items:item})}
                        

                        <button>Edit</button>

                      </Link>

                      <button onClick={(e)=>{
                        console.log(item._id)
                         
                         if(window.confirm("Are you sure you want to delete this item")){
                           const p = {
                             Item : item._id
                            }
                           axios.delete("http://localhost:5000/stock/delete",{data : p}).then((result)=>{
                            refreshPage();
                           })
                         }
                       
                 }}>Delete</button></td>

                    </tr>

                  )           
                })}
                
              </table>
              <div >
              <button className='Share'>
             Download
             </button>
              </div>
             </div>

         

        

       </div>
      
    </div>
  )
}
