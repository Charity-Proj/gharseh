const express = require('express')
const router = express.Router()
const {getAllUsers , deleteUser, getUser, updateUser} = require('../controllers/user');
const verifyUser = require('../middleware/verifyUser');


router.route('/users').post(getAllUsers);
router.route('/deleteUser/:id').post(deleteUser);
router.get('/getUser', verifyUser, getUser);

module.exports = router