const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  idposition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Position",
  },
  lastname: {
    type: String,
  },
  firstname: {
    type: String,
  },
  sex: {
    type: String,
  },
  address: {
    type: String,
  },
  birthday: {
    type: String,
  },
  email: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
});

module.exports = mongoose.model("Staff", StaffSchema);
