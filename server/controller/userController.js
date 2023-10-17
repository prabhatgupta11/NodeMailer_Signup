const  UserModel  = require("../model/userModel");
const nodemailer = require("nodemailer");
require('dotenv').config()
const bcrypt = require("bcrypt");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "guptajim3636@gmail.com",
    pass: process.env.pass,
  },
});

const sendWelcomeEmail = async (email) => {
  const mailOptions = {
    from: "guptajim3636@gmail.com",
    to: email,
    subject: "Welcome to our platform!",
    text: "Thank you for signing up. We are excited to have you on board!",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully.");
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};

const signupUser = async (req, res) => {
  try {
    console.log(44, req.body);

    const { email, password } = req.body;

    const hashpass = await bcrypt.hash(password, 10);

    const user = new UserModel({ email, password: hashpass });
    await user.save();
    
    // Send welcome email
  await sendWelcomeEmail(email);

    res.status(201).json({ message: "Registration successful", user });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = {
  signupUser,
};
