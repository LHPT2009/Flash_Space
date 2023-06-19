const ServicePackInUseController = require("../controllers/ServicePackInUse");

const router = require("express").Router();

router.get("/", ServicePackInUseController.getAllServicePackInUse);

router.get("/:id", ServicePackInUseController.getServicePackInUseById);

router.post("/", ServicePackInUseController.addServicePackInUse);

router.delete("/:id", ServicePackInUseController.deleteServicePackInUse);

router.put("/:id", ServicePackInUseController.updateServicePackInUse);

router.get(
  "/getPosts/:id",
  ServicePackInUseController.getServicePackInUseByIdAccount
);

router.get(
  "/redure/:idPackage",
  ServicePackInUseController.redurePostInServicePack
);
module.exports = router;
