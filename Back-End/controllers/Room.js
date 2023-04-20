const Room = require("../models/Room");
const WorkAssignment = require("../models/WorkAssignment");
const Image = require("../models/Image");

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
        idward: req.body.idward,
        idcareer: req.body.idcareer,
        idaccount: req.body.idaccount,
        length: req.body.length,
        width: req.body.width,
        price: req.body.price,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        static: "Chờ duyệt",
        subject: req.body.subject,
        describe: req.body.describe,
        housenumberstreetname: req.body.housenumberstreetname,
      });
      await newRoom.save();
      const date = new Date();
      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const implementationDate = date.getTime() + day * 2;
      const newWorkAssignment = new WorkAssignment({
        idroom: newRoom.id,
        idaccount: "642dc784cf8ef2472f6b1f9a",
        work: "Duyệt tin",
        implementationdate: implementationDate,
        static: 1,
      });
      await newWorkAssignment.save();
      // if (req.file != undefined) {
      //   const newImage = await new Image({
      //     idroom: newRoom.id,
      //     filename: req.file.filename,
      //   });
      // }

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
