const RoomDetail = require("../models/RoomDetail");

const RoomDetailController = {
  getAllRoomDetail: async (req, res) => {
    try {
      const roomDetail = await RoomDetail.find();
      res.status(200).json(roomDetail);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteRoomDetail: async (req, res) => {
    try {
      await RoomDetail.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getRoomDetailById: async (req, res) => {
    try {
      const roomDetail = await RoomDetail.findById(req.params.id);
      res.status(200).json(roomDetail);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addRoomDetail: async (req, res) => {
    try {
      const newRoomDetail = await new RoomDetail({
        idequipment: req.body.idequipment,
        idroom: req.body.idroom,
        quantity: req.body.quantity,
        unit: req.body.unit,
      });
      await newRoomDetail.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateRoomDetail: async (req, res) => {
    try {
      const updateRoomDetail = req.body;
      const roomDetail = await RoomDetail.findByIdAndUpdate(
        req.params.id,
        updateRoomDetail,
        {
          new: true,
        }
      );
      if (!roomDetail) {
        return res.status(404).json("Wrong updateRoomDetail!");
      }
      res.status(200).json(roomDetail);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = RoomDetailController;
