const authController = require("../controllers/auth");
const middlewareController = require("../middlewares/authMiddlewares");

const router = require("express").Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.post("/check", middlewareController.checkPasscodeToken);

router.post("/refresh", middlewareController.verifyTokenRefresh, authController.requestRefreshToken);

router.post("/sendsms", authController.sendPassCodeBySMS);

router.post("/sendmail", authController.sendPassCodeByMail);

router.post("/resetsms", authController.resetPasswordBySMS);

router.post("/resetmail", authController.resetPasswordByEmail);

router.post("/confirmsms", authController.confirmNumberPhone);

module.exports = router;