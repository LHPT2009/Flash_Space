const mongoose = require("mongoose");

const FavoriteRoomSchema = new mongoose.Schema({
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("FavoriteRoom", FavoriteRoomSchema);
