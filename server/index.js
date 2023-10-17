const express=require("express");
const { connection } = require("mongoose");
const  userRoute  = require("./route/userRouter");
require("dotenv").config();
const app=express();

app.use("/api",userRoute)

app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log("connect to database")
        console.log(`Server Is Running at ${PORT}`)

    }catch(err)
    {
        console.log(err.message)
    }
})