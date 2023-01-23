const mongoose = require("mongoose");

const DetailsRoomSchema = new mongoose.Schema(
  {
    idtypesroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    idroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DetailsRoom", DetailsRoomSchema);
