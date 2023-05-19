const mongoose = require("mongoose");

const EvaluateSchema = new mongoose.Schema({
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  idbookingroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookingRoom",
  },
  point: {
    type: Number,
  },
  content: {
    type: String,
  },
  static: {
    type: Number,
  },
});

module.exports = mongoose.model("Evaluate", EvaluateSchema);
