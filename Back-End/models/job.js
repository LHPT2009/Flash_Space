const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    idcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    idstaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    content: {
      type: String,
    },
    startdate: {
      type: Date,
    },
    enddate: {
      type: Date,
    },
    note: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
