const TimeSlotController = require("../controllers/TimeSlot");

const router = require("express").Router();

router.get("/", TimeSlotController.getAllTimeSlot);

router.get("/:id", TimeSlotController.getTimeSlotById);

router.post("/", TimeSlotController.addTimeSlot);

router.delete("/:id", TimeSlotController.deleteTimeSlot);

router.put("/:id", TimeSlotController.updateTimeSlot);

module.exports = router;
