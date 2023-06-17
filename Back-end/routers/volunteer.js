const express = require('express');
const router = express.Router();
const { Volunteer } = require('../controllers/Volunteer');
const auth = require('../middleware/auth');

router.route('/volunteer').post(auth.protect, Volunteer);

module.exports = router;