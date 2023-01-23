const mongoose = require("mongoose");

const PromotionRoomSchema = new mongoose.Schema(
  {
    percent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PromotionRoom", PromotionRoomSchema);
