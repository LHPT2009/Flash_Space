const WorkingHoursController = require("../controllers/WorkingHours");

const router = require("express").Router();

router.get("/", WorkingHoursController.getAllWorkingHours);

router.post("/:id", WorkingHoursController.getWorkingHoursById);

router.post("/", WorkingHoursController.addWorkingHours);

router.delete("/:id", WorkingHoursController.deleteWorkingHours);

router.put("/:id", WorkingHoursController.updateWorkingHours);

module.exports = router;
