const AuthController = require("../Auth/Auth");

const router = require("express").Router();

router.post("/register", AuthController.registerAccount);

router.post("/login", AuthController.loginAccount);

router.post("/logingoogle", AuthController.loginGoogle);

router.get("/confirmemail/:id", AuthController.confirmEmail);

router.post("/sendcoderesetbymail", AuthController.SendCodeResetByMail);

router.post("/reset", AuthController.ResetPassword);

module.exports = router;
