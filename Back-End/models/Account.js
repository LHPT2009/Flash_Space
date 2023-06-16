const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  idrole: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  avatar: {
    type: String,
  },
  birthday: {
    type: String,
  },
  static: {
    type: Number,
  },
  email: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  verification: {
    type: Boolean,
  },
  sex: {
    type: Number,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
