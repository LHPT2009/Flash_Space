const OTPController = require("../controllers/OTP");

const router = require("express").Router();

router.post("/", OTPController.GetOTPById);

module.exports = router;
