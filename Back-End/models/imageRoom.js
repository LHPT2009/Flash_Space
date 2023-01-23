const mongoose = require("mongoose");

const ImageRoomSchema = new mongoose.Schema(
  {
    idroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
    gps: {
      type: String,
    },
    time: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ImageRoom", ImageRoomSchema);
