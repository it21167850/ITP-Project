import React from "react";
import { Link } from "react-router-dom";
import back3 from "./back3.png";

const HomePage = () => {
  return (
    <div
      className='bg-cover bg-center h-screen flex flex-col items-center justify-center'
      style={{ backgroundImage: `url(${back3})` }}
    >
      <h1 className='text-5xl font-bold text-white mb-4'>
        Welcome to Nugasewana
      </h1>
      <p className='text-lg text-white text-center mb-8'>
        Discover the flavors of Sri Lanka today at Nugasewana. Our restaurant
        has been serving delicious meals since 2019, using only the freshest
        ingredients and traditional cooking methods. From traditional rice and
        curry dishes to fusion creations, we have something for everyone to
        enjoy. Whether you dine in or order delivery to your doorstep, our
        friendly staff are committed to providing exceptional service.
      </p>
      <Link
        to='/FItems'
        className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full'
      >
        View Our Items
      </Link>
    </div>
  );
};

export default HomePage;
