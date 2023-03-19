const StaffController = require("../controllers/Staff");

const router = require("express").Router();

router.get("/", StaffController.getAllStaff);

router.get("/:id", StaffController.getStaffById);

router.post("/", StaffController.addStaff);

router.delete("/:id", StaffController.deleteStaff);

router.put("/:id", StaffController.updateStaff);

module.exports = router;
