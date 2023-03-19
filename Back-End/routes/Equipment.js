const EquipmentController = require("../controllers/Equipment");

const router = require("express").Router();

router.get("/", EquipmentController.getAllEquipment);

router.get("/:id", EquipmentController.getEquipmentById);

router.post("/", EquipmentController.addEquipment);

router.delete("/:id", EquipmentController.deleteEquipment);

router.put("/:id", EquipmentController.updateEquipment);

module.exports = router;
