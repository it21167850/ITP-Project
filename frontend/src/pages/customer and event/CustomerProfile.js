import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

function CustomerProfile() {
  const userEmail = localStorage.getItem("userEmail");
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(`/customer/${userEmail}`);
        setCustomerData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomerData();
  }, [userEmail]);

  const handleEditClick = () => {
    window.location.href = "/edit-profile"; // Navigate to the edit profile page
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("userEmail"); // Clear the user email from local storage
    window.location.href = "/login"; // Navigate to the login page
  };

  return (
    <div>
      <Header
        isLoggedIn={true}
        firstName={customerData?.firstName}
        handleLogout={handleLogoutClick}
      />
      <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
        <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl' />
          <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
            {customerData ? (
              <>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                  Welcome, {customerData.firstName}!
                </h1>
                <img
                  src={customerData.image}
                  alt={`${customerData.firstName} ${customerData.lastName}`}
                  className='w-32 h-32 rounded-full mx-auto'
                />
                <p className='text-lg font-medium text-gray-900 mt-8'>
                  <p> First Name:{customerData.firstName}</p>
                  <p> Last Name :{customerData.lastName}</p>
                  <p> Email: {customerData.email}</p>
                </p>
                <div className='mt-10 flex justify-center'>
                  <button
                    type='button'
                    className='inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4'
                    onClick={handleEditClick}
                  >
                    Edit Details
                  </button>
                  <button
                    type='button'
                    className='inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
