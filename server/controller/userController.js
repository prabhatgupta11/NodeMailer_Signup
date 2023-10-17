const {UserModel}=require("../model/userModel")
const bcrypt = require('bcrypt');

const signupUser=async (req,res)=>{
    try{

        const {email,password}=req.body;
        const already= await UserModel.findOne({email})
        if(already)
        {
           return res.status(400).json("Email already Register! Please Login. ")
        }

        const hashpass=await bcrypt.hash(password,10)

        const user= new UserModel({email,hashpass})
        await user.save();
        res.status(201).json("Register Sucess",user)


    }catch(err)
    {
        res.status(401).json(err.message)
    }
}

module.exports={
    signupUser
}