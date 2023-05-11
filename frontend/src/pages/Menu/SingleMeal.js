import React from 'react'

const SingleMeal = (props) => {

const{_id,name,category,price,image} = props.Smeal

  return (
    <div>
       
        <img src={image} alt={name} width="150px" height="150px"/>
        <p>{name}</p>
        <p>{price}</p>



    </div>
  )
}

export default SingleMeal