import React, { useState } from "react";
import axios from "axios";
import { ImagetoBase64 } from "./ImagetoBase64"; // import the ImagetoBase64 function

const AddNewEvent = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let base64Image = "";
      if (image) {
        // check if image is selected
        base64Image = await ImagetoBase64(image); // convert image to base64
      }
      const res = await axios.post("/event/uploadEvent", {
        name,
        image: base64Image, // send the base64 string to the server
        startDate,
        startTime,
        endDate,
        endTime,
        description,
      });
      console.log(res.data);
      setName("");
      setImage("");
      setStartDate("");
      setStartTime("");
      setEndDate("");
      setEndTime("");
      setDescription("");
      setError("");
      alert("Event added successfully!"); // display success message
    } catch (error) {
      console.log(error);
      setError("Could not add event. Please try again.");
    }
  };

  return (
    <div class='bg-white p-4 rounded-lg'>
      <h2 class='text-xl font-bold mb-4 text-black'>Add New Event</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} class='space-y-4'>
        <div>
          <label htmlFor='name' class='block font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label htmlFor='image' class='block font-medium text-gray-700'>
            Image
          </label>
          <input
            type='file'
            accept='image/*'
            id='image'
            onChange={handleImageChange}
            required
            class='mt-1 block'
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt='Selected image preview'
              style={{ maxWidth: "10%", marginTop: "10px" }}
            />
          )}
        </div>
        <div class='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          <div class='w-full sm:w-1/2'>
            <label htmlFor='startDate' class='block font-medium text-gray-700'>
              Start Date
            </label>
            <input
              type='date'
              id='startDate'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div class='w-full sm:w-1/2'>
            <label htmlFor='startTime' class='block font-medium text-gray-700'>
              Start Time
            </label>
            <input
              type='time'
              id='startTime'
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
        </div>
        <div class='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          <div class='w-full sm:w-1/2'>
            <label htmlFor='endDate' class='block font-medium text-gray-700'>
              End Date
            </label>
            <input
              type='date'
              id='endDate'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div class='w-full sm:w-1/2'>
            <label htmlFor='endTime' class='block font-medium text-gray-700'>
              End Time
            </label>
            <input
              type='time'
              id='endTime'
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
              class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
        </div>
        <div>
          <label htmlFor='description' class='block font-medium text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          ></textarea>
        </div>
        <button
          type='submit'
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue'
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddNewEvent;
