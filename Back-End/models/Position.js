const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Position", PositionSchema);
