const AccountController = require("../controllers/Account");

const router = require("express").Router();

const multer = require("multer");
const path = require("path");
const sharp = require("sharp");

const uploadPath = path.join(__dirname, "uploads");

const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, uploadPath);
  // },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", AccountController.getAllAccounts);

router.get("/:id", AccountController.getAccountById);

router.post("/", AccountController.addAccount);

router.delete("/:id", AccountController.deleteAccount);

router.put("/:id", upload.single("avatar"), AccountController.updateAccount);

router.put("/notimage/:id", AccountController.updateAccountNotImage);

module.exports = router;
