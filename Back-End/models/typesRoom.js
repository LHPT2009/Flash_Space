const mongoose = require("mongoose");

const TypesRoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TypesRoom", TypesRoomSchema);
