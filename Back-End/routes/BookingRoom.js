const BookingRoomController = require("../controllers/BookingRoom");

const router = require("express").Router();

router.get("/", BookingRoomController.getAllBookingRoom);

router.get("/:id", BookingRoomController.getBookingRoomByIdAccount);

router.get("/booking/:idAccount", BookingRoomController.getBookingRoomForBoss);

router.get("/loadid/:id", BookingRoomController.getBookingRoomById);

router.post("/", BookingRoomController.addBookingRoom);

router.delete("/:id", BookingRoomController.deleteBookingRoom);

router.put("/:id", BookingRoomController.updateBookingRoom);

module.exports = router;
