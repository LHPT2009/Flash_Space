const RoomDetailController = require("../controllers/RoomDetail");

const router = require("express").Router();

router.get("/", RoomDetailController.getAllRoomDetail);

router.get("/:id", RoomDetailController.getRoomDetailById);

router.post("/", RoomDetailController.addRoomDetail);

router.delete("/:id", RoomDetailController.deleteRoomDetail);

router.put("/:id", RoomDetailController.updateRoomDetail);

module.exports = router;
