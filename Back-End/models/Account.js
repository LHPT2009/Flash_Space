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
    type: String,
  },
  email: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  emailverification: {
    type: String,
  },
  phonenumberverification: {
    type: String,
  },
  sex: {
    type: String,
  },
});

module.exports = mongoose.model("Account", AccountSchema);
