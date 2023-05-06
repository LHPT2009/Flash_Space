const WardController = require("../controllers/Ward");

const router = require("express").Router();

router.get("/", WardController.getAllWard);

router.get("/:id", WardController.getWardById);

router.get("/district/:id", WardController.getWardByDistrict);

router.post("/", WardController.addWard);

router.delete("/:id", WardController.deleteWard);

router.put("/:id", WardController.updateWard);

module.exports = router;
