const FavoriteRoomController = require("../controllers/FavoriteRoom");

const router = require("express").Router();

router.get("/", FavoriteRoomController.getAllFavoriteRoom);

router.get("/:idaccount", FavoriteRoomController.getFavoriteRoomByIdAccount);

router.post("/", FavoriteRoomController.addFavoriteRoom);

router.delete("/:id", FavoriteRoomController.deleteFavoriteRoom);

router.put("/:id", FavoriteRoomController.updateFavoriteRoom);

module.exports = router;
