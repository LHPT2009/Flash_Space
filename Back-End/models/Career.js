const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema({
  careername: {
    type: String,
  },
});

module.exports = mongoose.model("Career", CareerSchema);
