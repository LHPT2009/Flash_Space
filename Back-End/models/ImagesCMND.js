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
});

module.exports = mongoose.model("ImagesCMND", ImagesCMNDSchema);
