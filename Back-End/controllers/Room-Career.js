const RoomCareer = require("../models/Room-Career");

const RoomCareerController = {
  getAllRoomCareer: async (req, res) => {
    try {
      const roomCareer = await RoomCareer.find();
      res.status(200).json(roomCareer);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteRoomCareer: async (req, res) => {
    try {
      const roomCareer = await RoomCareer.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getRoomCareerById: async (req, res) => {
    try {
      const roomCareer = await RoomCareer.findById(req.params.id);
      res.status(200).json(roomCareer);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addRoomCareer: async (req, res) => {
    try {
      const newRoomCareer = await new RoomCareer({
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

      await newRoomCareer.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateRoomCareer: async (req, res) => {
    try {
      const updateRoomCareer = req.body;
      const roomCareer = await RoomCareer.findByIdAndUpdate(
        req.params.id,
        updateRoomCareer,
        {
          new: true,
        }
      );
      if (!roomCareer) {
        return res.status(404).json("Wrong updateRoomCareer!");
      }
      res.status(200).json(roomCareer);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = RoomCareerController;
