const Event = require("../models/event");

const uploadEvent = async (req, res) => {
  const { name, image, startDate, startTime, endDate, endTime, description } =
    req.body;

  const startDateTime = new Date(`${startDate}T${startTime}`);
  const endDateTime = new Date(`${endDate}T${endTime}`);

  const eventData = {
    name,
    image,
    startDate: startDateTime,
    startTime: startDateTime,
    endDate: endDateTime,
    endTime: endDateTime,
    description,
  };

  const event = new Event(eventData);

  try {
    await event.save();
    res.send({ message: "Event uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", data: "Internal server error" });
  }
};

const getEventData = async (req, res) => {
  try {
    const allEvent = await Event.find({});
    res.send({ status: "ok", data: allEvent });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", data: "Internal server error" });
  }
};

const deleteEvent = async (req, res) => {
  const { eventId } = req.body;
  try {
    const deletedEvent = await Event.deleteOne({ _id: eventId });
    if (deletedEvent.deletedCount === 0) {
      res.status(404).send({ status: "error", data: "Event not found" });
    } else {
      res.send({ status: "ok", data: "Deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", data: "Internal server error" });
  }
};

// Update event

const updateEvent = async (req, res) => {
  const { name, image, startDate, startTime, endDate, endTime, description } =
    req.body;
  const eventId = req.params.id;

  const startDateTime = new Date(`${startDate}T${startTime}`);
  const endDateTime = new Date(`${endDate}T${endTime}`);

  const eventData = {
    name,
    image,
    startDate: startDateTime,
    startTime: startDateTime,
    endDate: endDateTime,
    endTime: endDateTime,
    description,
  };

  try {
    await Event.findOneAndUpdate({ _id: eventId }, eventData);
    res.send({ status: "ok", data: "Event updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", data: "Internal server error" });
  }
};

module.exports = { uploadEvent, getEventData, deleteEvent, updateEvent };
