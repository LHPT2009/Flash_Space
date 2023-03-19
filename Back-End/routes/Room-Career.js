const RoomCareerController = require("../controllers/Room-Career");

const router = require("express").Router();

router.get("/", RoomCareerController.getAllRoomCareer);

router.get("/:id", RoomCareerController.getRoomCareerById);

router.post("/", RoomCareerController.addRoomCareer);

router.delete("/:id", RoomCareerController.deleteRoomCareer);

router.put("/:id", RoomCareerController.updateRoomCareer);

module.exports = router;
