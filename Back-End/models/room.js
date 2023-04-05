const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  idward: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ward",
  },
  idcareer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Career",
  },
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  length: {
    type: String,
  },
  width: {
    type: String,
  },
  price: {
    type: String,
  },
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
  static: {
    type: String,
  },
  describe: {
    type: String,
  },
  housenumberstreetname: {
    type: String,
  },
});

module.exports = mongoose.model("Room", RoomSchema);
