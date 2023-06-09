const ChatgptController = require("../controllers/Chatgpt");

const router = require("express").Router();

router.post("/", ChatgptController.chatGPT);

module.exports = router;
