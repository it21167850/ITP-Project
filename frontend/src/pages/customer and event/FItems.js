import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FItems.css";
import backgroundImage from "./back3.png";

const FItems = () => {
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      setProductsByCategory(response.data);
    });
  }, []);

  return (
    <div className='relative backgro'>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='container mx-auto py-8 relative z-10'>
        <h1 className='text-3xl font-bold mb-4 text-center text-white'>
          Our Food Items
        </h1>
        {Object.keys(productsByCategory).map((category) => (
          <div key={category} className='mb-8'>
            <h2
              className={`text-3xl font-bold text-${category.toLowerCase()}-800 mb-4`}
            >
              {category}
            </h2>
            <div className='container px-4 md:px-0 mx-auto flex flex-wrap overflow-x-auto'>
              {productsByCategory[category].map((product) => (
                <div
                  key={product._id}
                  className='bg-white rounded-lg shadow-md p-6 m-4 relative hover:shadow-lg w-64'
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className='mx-auto w-full h-48 object-cover rounded-lg'
                  />
                  <div className='mt-4'>
                    <h3
                      className={`text-xl font-semibold text-${category.toLowerCase()}-900 mb-2 itemName`}
                    >
                      {product.name}
                    </h3>
                    <p className={`text-red-500 font-medium`}>
                      {product.price}
                    </p>
                  </div>
                  <div className='flex justify-center h-12 addToCartContainer'>
                    <button
                      className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg z-20`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FItems;
