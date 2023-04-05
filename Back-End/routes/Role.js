const RoleController = require("../controllers/Role");

const router = require("express").Router();

router.get("/", RoleController.getAllRole);

router.get("/:id", RoleController.getRoleById);

router.post("/", RoleController.addRole);

router.delete("/:id", RoleController.deleteRole);

router.put("/:id", RoleController.updateRole);

module.exports = router;
