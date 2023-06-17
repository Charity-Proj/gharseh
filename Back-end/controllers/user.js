const User = require('../models/User')
const crypto = require('crypto')
const ErrorResponse = require('../utils/errorResponse');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getUser = async (req, res) => {
    if (!req?.user) return res.status(400).json({ "message": 'User is UnAuthorized' });
    const user = await User.findOne({ email: req.user.email }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User Email ${req.user.email} not found` });
    }
    res.json(user);
}

const updateUser = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const user = await User.findOne({ _id: req.body.id }).exec();

    if (!user) {
        return res.status(204).json({ "message": `No User matches ID ${req.body.id}.` });
    }

    if (req.body?.username) user.username = req.body.username;
    if (req.body?.email) user.email = req.body.email;
    const result = await user.save();
    res.json(result);
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUser,
    updateUser
}

