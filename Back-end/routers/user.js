const express = require('express')
const router = express.Router()
const {getUser, updateUser} = require('../controllers/user');
const verifyUser = require('../middleware/verifyUser');

/// ALL About Users
router.route('/updateUser/:id').post(updateUser);
router.get('/getUser', verifyUser, getUser);


module.exports = router