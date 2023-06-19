const Room = require("../models/Room");
const RoomDetail = require("../models/RoomDetail");
const WorkAssignment = require("../models/WorkAssignment");
const WorkingHours = require("../models/WorkingHours");
const Image = require("../models/Image");
const path = require("path");
const sharp = require("sharp");

const RoomController = {
  getAllRoom: async (req, res) => {
    try {
      const room = await Room.find()
        .populate("idprovince")
        .populate("iddistrict")
        .populate("idward")
        .populate("idcareer")
        .populate("idaccount");
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
      const room = await Room.findById(req.params.id)
        .populate("idprovince")
        .populate("iddistrict")
        .populate("idward")
        .populate("idcareer")
        .populate("idaccount");
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addRoom: async (req, res) => {
    try {
      const arrworkAssignment = await WorkAssignment.aggregate([
        {
          $group: {
            _id: "$idaccount",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            idaccount: "$_id",
            amount: "$count",
          },
        },
      ]);
      const sortarr = arrworkAssignment.sort((a, b) => a.amount - b.amount);
      const datetimenow = new Date();
      const newRoom = await new Room({
        idward: req.body.idward,
        idprovince: req.body.idprovince,
        iddistrict: req.body.iddistrict,
        idcareer: req.body.idcareer,
        idaccount: req.body.idaccount,
        length: req.body.length,
        width: req.body.width,
        price: req.body.price,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        static: 0,
        subject: req.body.subject,
        describe: req.body.describe,
        housenumberstreetname: req.body.housenumberstreetname,
        mainimage: req.files[0].filename,
        quantity: req.body.quantity,
        datetimenow: datetimenow,
      });
      await newRoom.save();

      req.files.forEach((item) => {
        let compressedImageFileSavePath = path.join(
          __dirname,
          "../images",
          item.filename
        );

        sharp(item.path)
          .jpeg({
            quality: 80,
            chromaSubsampling: "4:4:4",
          })
          .toFile(compressedImageFileSavePath);

        const newImage = new Image({
          idroom: newRoom.id,
          filename: item.filename,
          type: 0,
        });
        newImage.save();
      });

      const date = new Date();
      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const implementationDate = date.getTime() + day * 2;

      const newWorkAssignment = new WorkAssignment({
        idroom: newRoom.id,
        idaccount: sortarr[0].idaccount,
        work: "Duyệt tin",
        implementationdate: implementationDate,
        static: 0,
      });
      newWorkAssignment.save();

      const arrwork = JSON.parse(req.body.workinghours);
      arrwork.forEach((ele) => {
        const newWorkinghours = new WorkingHours({
          idtimeslot: ele.idtimeslot,
          idroom: newRoom.id,
          date: ele.date,
          static: 0,
        });
        newWorkinghours.save();
      });

      // const arrDetailRoom = JSON.parse(req.body.detailroom);
      // arrDetailRoom.forEach((ele) => {
      //   const newRoomDetails = new RoomDetail({
      //     idequipment: ele.idequipment,
      //     idroom: newRoom.id,
      //     quantity: ele.quantity,
      //     unit: ele.unit,
      //   });
      //   newRoomDetails.save();
      // });

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

  getRoomsOfAccount: async (req, res) => {
    try {
      const room = await Room.find({ idaccount: req.params.idAccount })
        .populate("idprovince")
        .populate("iddistrict")
        .populate("idward");
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = RoomController;
