const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    idcategory: {
      type: String,
    },
    idowner: {
      type: String,
    },
    name: {
      type: String,
    },
    area: {
      type: String,
    },
    address: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
