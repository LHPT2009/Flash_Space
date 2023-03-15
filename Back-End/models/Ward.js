const mongoose = require("mongoose");

const WardSchema = new mongoose.Schema({
  iddistrict: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
  },
  wardname: {
    type: String,
  },
});

module.exports = mongoose.model("Ward", WardSchema);
