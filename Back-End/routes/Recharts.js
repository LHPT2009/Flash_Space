const RechartsController = require("../controllers/Recharts");

const router = require("express").Router();

router.get("/countbookingroom", RechartsController.countbookingroom);

router.get("/countbookingschedule", RechartsController.countbookingschedule);

module.exports = router;
