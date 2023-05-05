const QueryController = require("../controllers/Query");

const router = require("express").Router();

router.get("/", QueryController.demo);

module.exports = router;
