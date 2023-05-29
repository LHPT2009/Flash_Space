const ImagesCMNDController = require("../controllers/ImagesCMND");
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

router.get("/", ImagesCMNDController.getAllImagesCMND);

router.get("/:id", ImagesCMNDController.getImagesCMNDById);

router.post("/", ImagesCMNDController.addImagesCMND);

router.delete("/:id", ImagesCMNDController.deleteImagesCMND);

router.put(
  "/:id",
  upload.array("multifiles[]"),
  ImagesCMNDController.updateImagesCMNDHaveImage
);
router.put("/not/:id", ImagesCMNDController.updateImagesCMNDHaveNotImage);
router.put("/static/:id", ImagesCMNDController.updateStaticImageCMND);

module.exports = router;
