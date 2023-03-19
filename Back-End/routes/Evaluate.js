const EvaluateController = require("../controllers/Evaluate");

const router = require("express").Router();

router.get("/", EvaluateController.getAllEvaluate);

router.get("/:id", EvaluateController.getEvaluateById);

router.post("/", EvaluateController.addEvaluate);

router.delete("/:id", EvaluateController.deleteEvaluate);

router.put("/:id", EvaluateController.updateEvaluate);

module.exports = router;
