const RoomController = require("../controllers/Room");

const router = require("express").Router();

router.get("/", RoomController.getAllRoom);

router.get("/:id", RoomController.getRoomById);

router.post("/", RoomController.addRoom);

router.delete("/:id", RoomController.deleteRoom);

router.put("/:id", RoomController.updateRoom);

module.exports = router;
