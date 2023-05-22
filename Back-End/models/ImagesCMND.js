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
  static: {
    type: Number,
  },
});

module.exports = mongoose.model("ImagesCMND", ImagesCMNDSchema);
