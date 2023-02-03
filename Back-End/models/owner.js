const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    balance: {
      type: Number,
    },
    point: {
      type: Number,
    },
    numberphone: {
      type: String,
    },
    confirmphone: {
      type: Boolean,
    },
    email: {
      type: String,
    },
    cofirmemail: {
      type: Number,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", ownerSchema);
