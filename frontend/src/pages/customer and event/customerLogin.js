import React, { useState } from "react";
import userIcon from "./userIcon.gif";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success alert
        alert("Login successful!");
        localStorage.setItem("userEmail", email); // Save user's email in local storage
        console.log(`User email ${email} saved in local storage.`); // Log the email to console
        window.location.href = "http://localhost:3000/customerHome";
      } else {
        // Show error alert
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      // Show error alert
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div className='flex items-center justify-center h-screen  style={{ marginTop: "-50px" }}'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
        {/*<h1 className="text-center text-2xl font bold">Signup</h1>*/}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
          <img src={userIcon} className='w-full' />
        </div>
        <h1 className='text-3xl font-bold mb-6'>Customer Login</h1>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-bold mb-2'
            >
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-bold mb-2'
            >
              Password:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;
