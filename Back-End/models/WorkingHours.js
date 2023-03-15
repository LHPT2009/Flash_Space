const mongoose = require("mongoose");

const WorkingHoursSchema = new mongoose.Schema({
  idtimeslot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TimeSlot",
  },
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  date: {
    type: String,
  },
  static: {
    type: String,
  },
});

module.exports = mongoose.model("WorkingHours", WorkingHoursSchema);
