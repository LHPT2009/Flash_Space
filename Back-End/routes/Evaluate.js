const EvaluateController = require("../controllers/Evaluate");

const router = require("express").Router();

router.get("/", EvaluateController.getAllEvaluate);

router.get("/:id", EvaluateController.getEvaluateByIdbookingroom);

router.get("/idevaluate/:id", EvaluateController.getEvaluateById);

router.get("/list/:id", EvaluateController.getListEvaluateByIdRoom);

router.post("/", EvaluateController.addEvaluate);

router.delete("/:id", EvaluateController.deleteEvaluate);

router.put("/:id", EvaluateController.updateEvaluate);

router.put("/static/:id", EvaluateController.updateEvaluateStatic);

module.exports = router;
