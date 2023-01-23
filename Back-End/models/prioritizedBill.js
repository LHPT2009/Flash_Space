const mongoose = require("mongoose");

const PrioritizedBillSchema = new mongoose.Schema(
  {
    idpromotion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promotion",
    },
    idowner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
    idprioritized: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prioritized",
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PrioritizedBill", PrioritizedBillSchema);
