const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb+srv://prabhat:prabhat@cluster0.nob5hjt.mongodb.net/Signup_NodeMailer?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connection,
};
