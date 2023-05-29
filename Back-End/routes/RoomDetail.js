const RoomDetailController = require("../controllers/RoomDetail");

const router = require("express").Router();

router.get("/", RoomDetailController.getAllRoomDetail);

router.get("/:id", RoomDetailController.getRoomDetailById);

router.get("/idroom/:id", RoomDetailController.getRoomDetailByIdRoom);

router.post("/", RoomDetailController.addRoomDetail);

router.delete("/:id", RoomDetailController.deleteRoomDetail);

router.put("/:id", RoomDetailController.updateRoomDetail);

module.exports = router;
