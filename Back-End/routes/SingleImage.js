const SingleImageController = require("../controllers/SingleImage");

const router = require("express").Router();

router.get("/:filename", SingleImageController.SingleImage);

module.exports = router;
