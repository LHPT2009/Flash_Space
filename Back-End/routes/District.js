const DistrictController = require("../controllers/District");

const router = require("express").Router();

router.get("/", DistrictController.getAllDistrict);

router.get("/:id", DistrictController.getDistrictById);

router.post("/", DistrictController.addDistrict);

router.delete("/:id", DistrictController.deleteDistrict);

router.put("/:id", DistrictController.updateDistrict);

module.exports = router;
