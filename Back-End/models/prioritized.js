const mongoose = require("mongoose");

const PrioritizedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    level: {
      type: Number,
    },
    price: {
      type: Number,
    },
    duration: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prioritized", PrioritizedSchema);
