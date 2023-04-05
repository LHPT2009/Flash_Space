const mongoose = require("mongoose");

const WorkAssignmentSchema = new mongoose.Schema({
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  work: {
    type: String,
  },
  static: {
    type: Number,
  },
  implementationdate: {
    type: String,
  },
});

module.exports = mongoose.model("WorkAssignment", WorkAssignmentSchema);
