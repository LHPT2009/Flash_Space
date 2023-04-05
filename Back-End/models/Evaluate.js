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
  point: {
    type: Number,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Evaluate", EvaluateSchema);
