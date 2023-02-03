const mongoose = require("mongoose");

const JobImageSchema = new mongoose.Schema(
  {
    idjob: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
    gps: {
      type: String,
    },
    time: {
      type: String,
    },
    linkimage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobImage", JobImageSchema);
