const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  idpermission: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Permission",
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
    type: Boolean,
  },
  email: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  emailverification: {
    type: Boolean,
  },
  phonenumberverification: {
    type: Boolean,
  },
  sex: {
    type: Number,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
