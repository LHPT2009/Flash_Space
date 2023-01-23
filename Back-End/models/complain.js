const mongoose = require("mongoose");

const ComplaineSchema = new mongoose.Schema(
  {
    idbill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complain", ComplaineSchema);
