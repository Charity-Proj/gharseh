const User = require('../models/User')


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
    if (req.body?.phonenumber) user.phonenumber = req.body.phonenumber;
    const result = await user.save();
    res.json(result);
}

module.exports = {
    getUser,
    updateUser
}

