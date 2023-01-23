const mongoose = require("mongoose");

const ImageApplicationSchema = new mongoose.Schema(
  {
    idapplication: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    time: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ImageApplication", ImageApplicationSchema);
