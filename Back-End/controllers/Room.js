const Room = require("../models/Room");

const RoomController = {
  getAllRoom: async (req, res) => {
    try {
      const room = await Room.find();
      res.status(200).json(room);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteRoom: async (req, res) => {
    try {
      const room = await Room.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getRoomById: async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addRoom: async (req, res) => {
    try {
      const newRoom = await new Room({
        // idpermission: req.body.idpermission,
        // username: req.body.username,
        // password: req.body.password,
        // lastname: req.body.lastname,
        // avatar: req.body.avatar,
        // birthday: req.body.birthday,
        // static: req.body.static,
        // email: req.body.email,
        // phonenumber: req.body.phonenumber,
        // emailverification: req.body.emailverification,
        // phonenumberverification: req.body.phonenumberverification,
        // sex: req.body.sex,
      });

      await newRoom.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateRoom: async (req, res) => {
    try {
      const updateRoom = req.body;
      const room = await Room.findByIdAndUpdate(req.params.id, updateRoom, {
        new: true,
      });
      if (!room) {
        return res.status(404).json("Wrong updateRoom!");
      }
      res.status(200).json(room);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = RoomController;
