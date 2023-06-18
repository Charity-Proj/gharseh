const { Event } = require("../models/eventSchema");
const getEvents = async (req, res) => {
  try {
    const event = await Event.find({ active: true });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOneEvent,
  getEvents,
};
