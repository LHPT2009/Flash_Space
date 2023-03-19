const WorkAssignmentController = require("../controllers/WorkAssignment");

const router = require("express").Router();

router.get("/", WorkAssignmentController.getAllWorkAssignment);

router.get("/:id", WorkAssignmentController.getWorkAssignmentById);

router.post("/", WorkAssignmentController.addWorkAssignment);

router.delete("/:id", WorkAssignmentController.deleteWorkAssignment);

router.put("/:id", WorkAssignmentController.updateWorkAssignment);

module.exports = router;
