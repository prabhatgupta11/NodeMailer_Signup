const express = require("express");
const userController = require("../controller/userController");
const userRoute = express.Router();

userRoute.use(express.json());

// Signup route
userRoute.post("/signup", userController.signupUser);
userRoute.get("/getdata", userController.getdata);

module.exports = userRoute;
