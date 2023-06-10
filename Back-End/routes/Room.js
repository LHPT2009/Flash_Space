const RoomController = require("../controllers/Room");
const multer = require("multer");
// const sharp = require("sharp");
const path = require("path");
const router = require("express").Router();

const uploadPath = path.join(__dirname, "uploads");

const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, uploadPath);
  // },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.get("/", RoomController.getAllRoom);

router.get("/:id", RoomController.getRoomById);

router.post("/", upload.array("multifiles[]"), RoomController.addRoom);

router.delete("/:id", RoomController.deleteRoom);

router.put("/:id", RoomController.updateRoom);

router.get("/account/:idAccount", RoomController.getRoomsOfAccount);

module.exports = router;
