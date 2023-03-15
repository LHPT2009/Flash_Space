const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model("Permission", PermissionSchema);
