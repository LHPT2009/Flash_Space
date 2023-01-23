const mongoose = require("mongoose");

const RoomBillSchema = new mongoose.Schema(
  {
    idpromotion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promotion",
    },
    iduser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    deposit: {
      type: String,
    },
    total: {
      type: String,
    },
    into: {
      type: String,
    },
    statusdeposit: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoomBill", RoomBillSchema);
