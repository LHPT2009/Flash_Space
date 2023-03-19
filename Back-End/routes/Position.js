const PositionController = require("../controllers/Position");

const router = require("express").Router();

router.get("/", PositionController.getAllPosition);

router.get("/:id", PositionController.getPositionById);

router.post("/", PositionController.addPosition);

router.delete("/:id", PositionController.deletePosition);

router.put("/:id", PositionController.updatePosition);

module.exports = router;
