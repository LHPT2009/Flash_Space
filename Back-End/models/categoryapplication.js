const mongoose = require("mongoose");

const CategoryApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "CategoryApplication",
  CategoryApplicationSchema
);
