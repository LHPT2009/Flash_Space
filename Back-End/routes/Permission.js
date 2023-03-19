const PermissionController = require("../controllers/Permission");

const router = require("express").Router();

router.get("/", PermissionController.getAllPermission);

router.get("/:id", PermissionController.getPermissionById);

router.post("/", PermissionController.addPermission);

router.delete("/:id", PermissionController.deletePermission);

router.put("/:id", PermissionController.updatePermission);

module.exports = router;
