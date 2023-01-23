const mongoose = require("mongoose");

const ComplainImageSchema = new mongoose.Schema(
  {
    idcomplain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complain",
    },
    gps: {
      type: String,
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

module.exports = mongoose.model("ComplainImage", ComplainImageSchema);
