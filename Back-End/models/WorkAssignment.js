const mongoose = require("mongoose");

const WorkAssignmentSchema = new mongoose.Schema({
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  idstaff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },
  work: {
    type: String,
  },
  static: {
    type: String,
  },
  implementationdate: {
    type: String,
  },
});

module.exports = mongoose.model("WorkAssignment", WorkAssignmentSchema);
