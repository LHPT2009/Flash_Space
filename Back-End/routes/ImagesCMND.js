const ImagesCMNDController = require("../controllers/ImagesCMND");

const router = require("express").Router();

router.get("/", ImagesCMNDController.getAllImagesCMND);

router.get("/:id", ImagesCMNDController.getImagesCMNDById);

router.post("/", ImagesCMNDController.addImagesCMND);

router.delete("/:id", ImagesCMNDController.deleteImagesCMND);

router.put("/:id", ImagesCMNDController.updateImagesCMND);

module.exports = router;
