const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    name: {
      type: String,
    },
    name: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Time", TimeSchema);
