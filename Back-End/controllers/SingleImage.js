const path = require("path");

const SingleImageController = {
  SingleImage: async (req, res) => {
    try {
      const link = await path.join(__dirname, "../images", req.params.filename);
      res.status(200).sendFile(link);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = SingleImageController;
