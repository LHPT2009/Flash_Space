const mongoose = require("mongoose");

const RoomDetailSchema = new mongoose.Schema({
  idequipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipment",
  },
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  quantity: {
    type: String,
  },
  unit: {
    type: String,
  },
});

module.exports = mongoose.model("RoomDetail", RoomDetailSchema);
