const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
