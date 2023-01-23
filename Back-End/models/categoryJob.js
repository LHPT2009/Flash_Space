const mongoose = require("mongoose");

const CategoryJobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    point: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CategoryJob", CategoryJobSchema);
