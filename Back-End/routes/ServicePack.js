const ServicePackController = require("../controllers/ServicePack");

const router = require("express").Router();

router.get("/", ServicePackController.getAllServicePack);

router.get("/:id", ServicePackController.getServicePackById);

router.post("/", ServicePackController.addServicePack);

router.delete("/:id", ServicePackController.deleteServicePack);

router.put("/:id", ServicePackController.updateServicePack);

module.exports = router;
