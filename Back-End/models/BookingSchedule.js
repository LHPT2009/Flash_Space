const mongoose = require("mongoose");

const BookingScheduleSchema = new mongoose.Schema({
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
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
