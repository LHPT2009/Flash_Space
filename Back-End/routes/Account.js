const AccountController = require("../controllers/Account");

const router = require("express").Router();

router.get("/", AccountController.getAllAccounts);

router.get("/:id", AccountController.getAccountById);

router.post("/", AccountController.addAccount);

router.delete("/:id", AccountController.deleteAccount);

router.put("/:id", AccountController.updateAccount);

module.exports = router;
