// import event model
const {Event}=require('../models/Event')
const getEvents = async (req, res) => {};

const getOneEvent = async (req, res) => {};



const getEventsByVolunteer = async (req, res) => {

  try {
      const email = req.body.email
      const events = await Event.find({ "volunteers.email": email });
      res.json(events) ;

    } catch (error) {
      // Handle error
      console.error("Error retrieving volunteered events:", error);
      throw error;
    }

}
const getEventsByDoner = async (req, res) => {

  try {
      const email = req.body.email
      const events = await Event.find({ "donators.email": email });
      res.json(events) ;

    } catch (error) {
      // Handle error
      console.error("Error retrieving donators events:", error);
      throw error;
    }

}



module.exports = {
  getOneEvent,
  getEvents,
  getEventsByVolunteer,
  getEventsByDoner
};
