const Volunteer = require('../models/volunteer')
const auth = require('../middleware/auth')


exports.Volunteer = async  (req, res, next) => {
    const {fullName, email, age, gender } = req.body;
    try {
      const volunteer = await Volunteer.create({
        fullName,
        email,
        age,
        gender
      });

      res.json(volunteer)
    } catch (error) {
        next(error)
    }
  };
  


  