const mongoose = require("mongoose");

const BookingScheduleSchema = new mongoose.Schema({
  idbookingroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookingRoom",
  },
  idworkinghours: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkingHours",
  },
  static: {
    type: Number,
  },
});

module.exports = mongoose.model("BookingSchedule", BookingScheduleSchema);
