import React from 'react'

const ViewSingleOwn = (props) => {


    const{_id,name,category,image,price} = props.omeal;

  return (
    <div>

        <h6>{name}</h6>
        <h6>{category}</h6>
        <h6>{price}</h6>
        <h6>{image}</h6>
      




        <img classNamee="sub"src={image} alt={name}  width="250" height="250"/>
        <br></br>
        <br></br>
        <br></br>






    </div>
  )
}

export default ViewSingleOwn