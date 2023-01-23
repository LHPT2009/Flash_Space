const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema(
  {
    idbill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomBill",
    },
    content: {
      type: String,
    },
    point: {
      type: Number,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rate", RateSchema);
