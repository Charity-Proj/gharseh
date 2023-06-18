// import event model
const Event=require('../models/Event')
const getEvents = async (req, res) => {};

const getOneEvent = async (req, res) => {};

const findEventsByDonatorEmail = async (donatorEmail) => {
    try {
      const events = await Event.find({ 'donators.email': donatorEmail });
      return events;
    } catch (err) {
      console.error('Failed to find events:', err);
      throw err;
    }
  };

module.exports = {
  getOneEvent,
  getEvents,
  findEventsByDonatorEmail
};
