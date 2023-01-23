const mongoose = require("mongoose");

const PromotionSchema = new mongoose.Schema(
  {
    percent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Promotion", PromotionSchema);
