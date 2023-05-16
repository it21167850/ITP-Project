// Header.js

import React from "react";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, userEmail, handleLogout }) {
  return (
    <header>
      <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <Link to='/' className='font-semibold text-xl tracking-tight'>
            My Website
          </Link>
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path
                d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'
                fillRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <Link
              to='/items'
              className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4'
            >
              Items
            </Link>
            <Link
              to='/packages'
              className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4'
            >
              Packages
            </Link>
            <Link
              to='/events'
              className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white'
            >
              Events
            </Link>
          </div>
          <div>
            {isLoggedIn ? (
              <>
                <span className='text-gray-200 mr-4'>
                  Welcome, {userEmail}!
                </span>
                <Link
                  to='/customerProfile'
                  className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 mr-4'
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 mr-4'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0'
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
