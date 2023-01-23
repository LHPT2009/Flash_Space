const mongoose = require("mongoose");

const identityCardSchema = new mongoose.Schema(
  {
    idownner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
    numbercard: {
      type: String,
    },
    linkimage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IdentityCard", identityCardSchema);
