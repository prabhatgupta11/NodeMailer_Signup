const express=require("express")
const userController=require("../controller/userController")
const userRoute=Router()


//signup route
userRoute.post("/signup",userController.signupUser)

module.exports={
    userRoute
}