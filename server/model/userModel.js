const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
