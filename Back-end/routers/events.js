const express = require('express')
const router = express.Router()
const {getEvents, getOneEvent, getEventsByVolunteer, getEventsByDoner} = require('../controllers/events');

/// ALL About Users
router.get('/getEvents',getEvents);
router.get('/getOneEvent/:id',  getOneEvent);
router.get('/getVolunteerEvents/',getEventsByVolunteer)
router.get('/getDonerEvent/',getEventsByDoner)

module.exports = router