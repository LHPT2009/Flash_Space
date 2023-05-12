const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  idward: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ward",
  },
  idprovince: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Province",
  },
  iddistrict: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
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
    type: Number,
  },
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
  static: {
    type: Number,
  },
  subject: {
    type: String,
  },
  describe: {
    type: String,
  },
  housenumberstreetname: {
    type: String,
  },
  mainimage: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Room", RoomSchema);
