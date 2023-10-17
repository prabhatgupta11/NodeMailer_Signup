const express = require("express");
const userController = require("../controller/userController");
const userRoute = express.Router();

userRoute.use(express.json());

// Signup route
userRoute.post("/signup", userController.signupUser);

module.exports = userRoute;
