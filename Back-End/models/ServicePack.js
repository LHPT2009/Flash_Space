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
    type: String,
  },
});

module.exports = mongoose.model("ServicePack", ServicePackSchema);
