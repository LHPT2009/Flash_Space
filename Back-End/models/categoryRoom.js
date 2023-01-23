const mongoose = require("mongoose");

const CategoryRoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CategoryRoom", CategoryRoomSchema);
