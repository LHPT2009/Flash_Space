const mongoose = require("mongoose");

const ProvinceSchema = new mongoose.Schema({
  provincename: {
    type: String,
  },
});

module.exports = mongoose.model("Province", ProvinceSchema);
