const mongoose = require("mongoose");

const DetailsRoomSchema = new mongoose.Schema(
  {
    idbill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomBill",
    },
    idroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
    starttime: {
      type: String,
    },
    endtime: {
      type: String,
    },
    startdate: {
      type: String,
    },
    enddate: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DetailsRoom", DetailsRoomSchema);
