const mongoose = require("mongoose");

const Notificationchema = new mongoose.Schema(
  {
    idbill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "",
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    starttime: {
      type: String,
    },
    endtime: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", Notificationchema);
