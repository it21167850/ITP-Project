import React, { useState, useEffect } from "react";
import axios from "axios";

function EventData() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/event/getEventData"
        );
        setEvents(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchEventData();
  }, []);

  const deleteEvent = (id, name) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${name}Event from the system?`
      )
    ) {
      fetch("http://localhost:5000/event/deleteEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            setEvents((prevData) =>
              prevData.filter((event) => event._id !== id)
            );
            alert(data.data);
          } else {
            alert("Failed to delete event");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("An error occurred while deleting the event");
        });
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const handleCancel = () => {
    setEditingEvent(null);
  };

  const handleSave = async (eventData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/event/updateEvent/${editingEvent._id}`,
        eventData
      );
      if (response.status === 200) {
        setEvents((prevData) =>
          prevData.map((event) =>
            event._id === response.data.data._id ? response.data.data : event
          )
        );
        setEditingEvent(null);
        alert("Event updated successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to update event");
    }
  };

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>All Events</h1>
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='px-2 py-1 text-sm text-left'>Name</th>
            <th className='px-2 py-1 text-sm text-left'>Image</th>
            <th className='px-2 py-1 text-sm text-left'>Start Date</th>
            <th className='px-2 py-1 text-sm text-left'>Start Time</th>
            <th className='px-2 py-1 text-sm text-left'>End Date</th>
            <th className='px-2 py-1 text-sm text-left'>End Time</th>
            <th className='px-2 py-1 text-sm text-left'>Description</th>
            <th className='px-2 py-1 text-sm'></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td className='border px-2 py-1 text-sm'>{event.name}</td>
              <td className='border px-2 py-1 text-sm'>
                <img
                  src={event.image}
                  alt={event.name}
                  className='w-12 h-12 object-cover rounded'
                />
              </td>
              <td className='border px-2 py-1 text-sm'>
                {new Date(event.startDate).toLocaleDateString()}
              </td>
              <td className='border px-2 py-1 text-sm'>
                {new Date(event.startTime).toLocaleTimeString()}
              </td>
              <td className='border px-2 py-1 text-sm'>
                {new Date(event.endDate).toLocaleDateString()}
              </td>
              <td className='border px-2 py-1 text-sm'>
                {new Date(event.endTime).toLocaleTimeString()}
              </td>
              <td className='border px-2 py-1 text-sm'>{event.description}</td>
              <td className='border px-2 py-1 text-sm'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2rounded text-sm'
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 text-sm'
                  onClick={() => deleteEvent(event._id, event.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingEvent && (
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75'></div>
            <div className='relative bg-white w-96 p-5 rounded-lg'>
              <h2 className='text-2xl font-bold mb-4'>Edit Event</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const eventData = {
                    name: formData.get("name"),
                    image: formData.get("image"),
                    startDate: formData.get("startDate"),
                    startTime: formData.get("startTime"),
                    endDate: formData.get("endDate"),
                    endTime: formData.get("endTime"),
                    description: formData.get("description"),
                  };
                  handleSave(eventData);
                }}
              >
                <div className='mb-4'>
                  <label
                    htmlFor='name'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    defaultValue={editingEvent.name}
                    required
                    className='border-b border-gray-400 py-2 px-3 w-full focus:outline-none focus:border-blue-400'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='image'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Image URL
                  </label>
                  <input
                    type='text'
                    name='image'
                    id='image'
                    defaultValue={editingEvent.image}
                    required
                    className='border-b border-gray-400 py-2 px-3 w-full focus:outline-none focus:border-blue-400'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='startDate'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Start Date
                  </label>
                  <input
                    type='date'
                    name='startDate'
                    id='startDate'
                    defaultValue={
                      new Date(editingEvent.startDate)
                        .toISOString()
                        .split("T")[0]
                    }
                    required
                    className='border-b border-gray-400 py-2 px-3 w-full focus:outline-none focus:border-blue-400'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='startTime'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Start Time
                  </label>
                  <input
                    type='time'
                    name='startTime'
                    id='startTime'
                    defaultValue={new Date(editingEvent.startTime)
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace(/ /g, "")}
                    required
                    className='border-b border-gray-400 py-2 px-3 w-full focus:outline-none focus:border-blue-400'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='endDate'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    End Date
                  </label>
                  <input
                    type='date'
                    name='endDate'
                    id='endDate'
                    defaultValue={
                      new Date(editingEvent.endDate).toISOString().split("T")[0]
                    }
                    required
                    className='border-b border-gray-400 py-2 px-3 w-full focus:outline-none focus:border-blue-400'
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='endTime'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    End Time
                  </label>
                  <input
                    type='time'
                    name='endTime'
                    id='endTime'
                    defaultValue={new Date(editingEvent.endTime)
                      .toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace(/ /g, "")}
                    required
                    className='border-b border-gray-400 py-2 px-3 w-full focus:outline-none focus:border-blue-400'
                  />{" "}
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='description'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Description
                  </label>
                  <textarea
                    name='description'
                    id='description'
                    rows='3'
                    defaultValue={editingEvent.description}
                    required
                    className='border-b border-gray-400 py-2 px-3 w-full focus:outline-none focus:border-blue-400'
                  ></textarea>
                </div>
                <div className='flex justify-end mt-6'>
                  <button
                    type='button'
                    onClick={handleCancel}
                    className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventData;
