import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FItems.css";

const FItems = () => {
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/getProducts").then((response) => {
      setProductsByCategory(response.data);
    });
  }, []);

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-4 text-center text-gray-600'>
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
                className='bg-white rounded-lg shadow-md p-6 m-4 relative hover:shadow-lg'
              >
                <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50 rounded-lg z-10 hidden'></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className='mx-auto w-full h-48 object-cover rounded-lg z-20'
                />
                <div className='mt-4'>
                  <h3
                    className={`text-xl font-semibold text-${category.toLowerCase()}-900 mb-2`}
                  >
                    {product.name}
                  </h3>
                  <p className={`text-red-500 font-medium`}>
                    {typeof product.price === "number"
                      ? `$${product.price.toFixed(2)}`
                      : "-"}
                  </p>
                </div>
                <button
                  className={`mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg z-20 animated-btn`}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FItems;
