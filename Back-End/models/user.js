const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    numberphone: {
      type: String,
    },
    confirmnumberphone: {
      type: Boolean,
    },
    email: {
      type: String,
    },
    confirmemail: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
