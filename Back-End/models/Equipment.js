const mongoose = require("mongoose");

const EquipmentSchema = new mongoose.Schema({
  equipmentname: {
    type: String,
  },
});

module.exports = mongoose.model("Equipment", EquipmentSchema);
