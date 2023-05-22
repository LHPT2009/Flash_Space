const mongoose = require("mongoose");

const ServicePackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  content: {
    type: String,
  },
  duration: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  static: {
    type: Number,
  },
});

module.exports = mongoose.model("ServicePack", ServicePackSchema);
