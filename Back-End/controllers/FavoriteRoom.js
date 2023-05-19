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

  getFavoriteRoomByIdAccount: async (req, res) => {
    try {
      const favoriteRoom = await FavoriteRoom.find({
        idaccount: req.params.idaccount,
      })
        .populate({
          path: "idroom",
          populate: {
            path: "idcareer",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "idprovince",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "idward",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "iddistrict",
          },
        });
      res.status(200).json(favoriteRoom);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addFavoriteRoom: async (req, res) => {
    try {
      const check = await FavoriteRoom.findOne({
        idaccount: req.body.idaccount,
        idroom: req.body.idroom,
      });
      if (check) {
        res.status(404).json("Da ton tai!");
      }
      if (!check) {
        const date = new Date();
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month =
          date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth();
        const year = date.getFullYear();
        const datestring = year + "-" + month + "-" + day;

        const newFavoriteRoom = await new FavoriteRoom({
          idaccount: req.body.idaccount,
          idroom: req.body.idroom,
          date: datestring,
        });
        await newFavoriteRoom.save();
        res.status(200).json("Add Successfully");
      }
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
