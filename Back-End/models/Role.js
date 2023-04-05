const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  rolename: {
    type: String,
  },
});

module.exports = mongoose.model("Role", RoleSchema);
