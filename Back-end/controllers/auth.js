const User = require('../models/User')
const crypto = require('crypto')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail')

exports.Register = async (req, res, next) => {
    const { username, email, role, password } = req.body;
    console.log("Register")
    try {
      const user = await User.create({
        username,
        email,
        role,
        password
      });
      sendToken(user , 201 ,res)

    } catch (error) {
        next(error)
    }
  };
  

exports.login = async (req,res,next) => {
    const {  email, password } = req.body;

    if(!email || !password){
        return next(new ErrorResponse("please enter email and password",400))
    }
    try {
        const user = await User.findOne({email}).select("+password")
        if(!user){
        return next(new ErrorResponse("invalid credentials",401))

        }

        const isMatch = await user.matchPasswords(password)
        if(!isMatch){
            return next(new ErrorResponse("invalid credentials",401))

        }
        sendToken(user,200,res)
      } catch (error) {
        next(error)
      }
}



exports.forgotPassword = async (req,res,next) => {
  const {email} = req.body
  try{
    const user = await User.findOne({email})
    if(!user){
      return next(new ErrorResponse("email could not be sent",404))
    }
    const resetToken = user.getResetPasswordToken()

    await user.save()
    const restUrl = `http://localhost:5173/passwordrest/${resetToken}`
    const message = `
    <h1>you have requested a password reset</h1>
    <p>please go to this link to rest your password</p>
    <a href="${restUrl}" clicktracking="off">${restUrl}</a>
    `
    try{
      sendEmail({
        to:user.email,
        subject:"password reset",
        text:message
    })
    res.status(200).json({success:true,data:"email sent"})
    }catch(error){
      user.resetPasswordToken = undefined
      user.resetPasswordExpire = undefined

      await user.save()

      next(new ErrorResponse("email could not be send",500))
    }
  }catch(error){
    next(error)
  }
    }
    
    exports.resetPassword = async (req, res, next) => {
      const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.resetToken)
        .digest("hex");
    
      try {
        const user = await User.findOne({
          resetPasswordToken,
          resetPasswordExpire: { $gt: Date.now() },
        });
    
        if (!user) {
          return next(new ErrorResponse("Invalid reset token", 404));
        }

        user.password = req.body.password;
        user.resetPasswordExpire = undefined;
        user.resetPasswordToken = undefined;
        await user.save();
    
        res.status(201).json({ success: true, data: "Password has been reset successfully" });
      } catch (err) {
        next(err);
      }
    };
    

    const sendToken = (user, statusCode, res) => {
        const token = user.getSignToken();
        res.status(statusCode).json({ success: true, jwttoken:token });
   };