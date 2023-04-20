const FavoriteRoom = require("../models/FavoriteRoom");

const FavoriteRoomController = {
  getAllFavoriteRoom: async (req, res) => {
    try {
      const favoriteRoom = await FavoriteRoom.find();
      res.status(200).json(favoriteRoom);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteFavoriteRoom: async (req, res) => {
    try {
      await FavoriteRoom.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getFavoriteRoomById: async (req, res) => {
    try {
      const favoriteRoom = await FavoriteRoom.findById(req.params.id);
      res.status(200).json(favoriteRoom);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addFavoriteRoom: async (req, res) => {
    try {
      const date = new Date().getTime();
      const newFavoriteRoom = await new FavoriteRoom({
        idaccount: req.body.idaccount,
        idroom: req.body.idroom,
        date: date.toString(),
      });
      await newFavoriteRoom.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateFavoriteRoom: async (req, res) => {
    try {
      const updateFavoriteRoom = req.body;
      const favoriteRoom = await FavoriteRoom.findByIdAndUpdate(
        req.params.id,
        updateFavoriteRoom,
        {
          new: true,
        }
      );
      if (!favoriteRoom) {
        return res.status(404).json("Wrong updateFavoriteRoom!");
      }
      res.status(200).json(favoriteRoom);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = FavoriteRoomController;
