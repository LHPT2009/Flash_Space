const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    idstaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
    },
    idcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryApplication",
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
    },
    name: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);
