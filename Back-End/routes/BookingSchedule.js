const BookingScheduleController = require("../controllers/BookingSchedule");

const router = require("express").Router();

router.get("/", BookingScheduleController.getAllBookingSchedules);

router.get("/:id", BookingScheduleController.getBookingScheduleById);

// router.get("/one/:id", BookingScheduleController.getOneBookingScheduleById);

router.post("/", BookingScheduleController.addBookingSchedule);

router.delete("/:id", BookingScheduleController.deleteBookingSchedule);

router.put("/:id", BookingScheduleController.updateBookingSchedule);

module.exports = router;
