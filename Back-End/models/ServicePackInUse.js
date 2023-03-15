const mongoose = require("mongoose");

const ServicePackInUseSchema = new mongoose.Schema({
  idservicepack: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServicePack",
  },
  idaccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  starttime: {
    type: String,
  },
  endtime: {
    type: String,
  },
});

module.exports = mongoose.model("ServicePackInUse", ServicePackInUseSchema);
