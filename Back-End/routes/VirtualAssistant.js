const VirtualAssistantController = require("../controllers/VirtualAssistant");

const router = require("express").Router();

router.post("/", VirtualAssistantController.ResVirtualAssistant);

module.exports = router;
