const mongoose = require("mongoose");

const TimeSlotSchema = new mongoose.Schema({
  starttime: {
    type: String,
  },
  endtime: {
    type: String,
  },
});

module.exports = mongoose.model("TimeSlot", TimeSlotSchema);
