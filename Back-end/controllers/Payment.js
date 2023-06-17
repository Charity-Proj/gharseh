const Payment = require('../models/Payment');
const User = require('../models/User');

exports.Payment = async (req, res, next) => {
  const { id, cardNumber,cardHolder, cvc, expiryDate } = req.body;

  try {
    const user = await User.findOne({ id });

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const payment = await Payment.create({
      cardNumber,
      cardHolder,
      cvc,
      expiryDate,
      id,
    });

    res.json(payment);
  } catch (error) {
    next(error);
  }
};

