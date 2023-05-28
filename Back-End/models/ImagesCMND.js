const mongoose = require("mongoose");

const ImagesCMNDSchema = new mongoose.Schema({
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  frontimage: {
    type: String,
  },
  backimage: {
    type: String,
  },
  numbercard: {
    type: String,
  },
  name: {
    type: String,
  },
  birth: {
    type: String,
  },
  sex: {
    type: Number,
  },
  address: {
    type: String,
  },
  datecard: {
    type: String,
  },
  staticimage: {
    type: Number,
  },
  static: {
    type: Number,
  },
});

module.exports = mongoose.model("ImagesCMND", ImagesCMNDSchema);
