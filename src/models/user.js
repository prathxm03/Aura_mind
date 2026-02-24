const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  role: {type: String , default: 'user'},
  password: { type: String, required: true },
  avatar: { type: String, required: true}, // fixed typo
});

const User = mongoose.model("User", userSchema);

module.exports = User;
