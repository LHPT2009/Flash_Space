const mongoose = require("mongoose");

const BookingRoomSchema = new mongoose.Schema({
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  date: {
    type: String,
  },
  total: {
    type: Number,
  },
});

module.exports = mongoose.model("BookingRoom", BookingRoomSchema);
