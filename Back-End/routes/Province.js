const ProvinceController = require("../controllers/Province");

const router = require("express").Router();

router.get("/", ProvinceController.getAllProvince);

router.get("/:id", ProvinceController.getProvinceById);

router.post("/", ProvinceController.addProvince);

router.delete("/:id", ProvinceController.deleteProvince);

router.put("/:id", ProvinceController.updateProvince);

module.exports = router;
