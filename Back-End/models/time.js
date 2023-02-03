const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema(
  {
    idroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
    starttime: {
      type: String,
    },
    endtime: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Time", TimeSchema);
