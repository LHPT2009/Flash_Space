const ImageController = require("../controllers/Image");

const router = require("express").Router();

router.get("/", ImageController.getAllImage);

router.get("/:id", ImageController.getImageById);

router.post("/", ImageController.addImage);

router.delete("/:id", ImageController.deleteImage);

router.put("/:id", ImageController.updateImage);

module.exports = router;
