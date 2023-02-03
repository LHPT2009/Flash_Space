const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    idrole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    sex: {
      type: Number,
    },
    date: {
      type: Date,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
