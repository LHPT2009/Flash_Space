const CareerController = require("../controllers/Career");

const router = require("express").Router();

router.get("/", CareerController.getAllCareer);

router.get("/:id", CareerController.getCareerById);

router.post("/", CareerController.addCareer);

router.delete("/:id", CareerController.deleteCareer);

router.put("/:id", CareerController.updateCareer);

module.exports = router;
