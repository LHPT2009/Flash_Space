const mongoose = require("mongoose");

const RoomCareerSchema = new mongoose.Schema({
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  idcareer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Career",
  },
});

module.exports = mongoose.model("RoomCareer", RoomCareerSchema);
