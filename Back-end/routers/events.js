const express = require('express')
const router = express.Router()
const {getEvents, getOneEvent} = require('../controllers/events');

/// ALL About Users
router.route('/getEvents/').post(getEvents);
router.get('/getOneEvent/:id',  getOneEvent);


module.exports = router