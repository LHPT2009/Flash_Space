const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  idroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  filename: {
    type: String,
  },
  type: {
    type: Number,
  },
});

module.exports = mongoose.model("Image", ImageSchema);
