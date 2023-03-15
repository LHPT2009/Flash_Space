const mongoose = require("mongoose");

const DistrictSchema = new mongoose.Schema({
  idprovince: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Province",
  },
  districtname: {
    type: String,
  },
});

module.exports = mongoose.model("District", DistrictSchema);
