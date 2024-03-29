const BookingRoom = require("../models/BookingRoom");
const BookingSchedule = require("../models/BookingSchedule");
const WorkingHours = require("../models/WorkingHours");
const Evaluate = require("../models/Evaluate");
const Room = require("../models/Room");
const e = require("cors");

const BookingRoomController = {
  getAllBookingRoom: async (req, res) => {
    try {
      const bookingRoom = await BookingRoom.find().populate("idaccount");
      res.status(200).json(bookingRoom);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteBookingRoom: async (req, res) => {
    try {
      const bookingRoom = await BookingRoom.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getBookingRoomByIdAccount: async (req, res) => {
    try {
      const bookingRoom = await BookingRoom.find({ idaccount: req.params.id });
      res.status(200).json(bookingRoom);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getBookingRoomById: async (req, res) => {
    try {
      const bookingRoom = await BookingRoom.findById(req.params.id).populate(
        "idaccount"
      );
      res.status(200).json(bookingRoom);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addBookingRoom: async (req, res) => {
    try {
      const datenow = new Date();
      const daynow =
        datenow.getDate() < 10 ? `0${datenow.getDate()}` : datenow.getDate();
      const monthnow =
        datenow.getMonth() + 1 < 10
          ? `0${datenow.getMonth() + 1}`
          : datenow.getMonth();
      const yearnow = datenow.getFullYear();
      const datestring = yearnow + "-" + monthnow + "-" + daynow;

      const newBookingRoom = await new BookingRoom({
        idaccount: req.body.idaccount,
        date: datestring,
        total: req.body.total,
        static: 0,
      });

      await newBookingRoom.save();

      const arr = req.body.timeslots;
      arr.forEach(async (item) => {
        const newBookingSchedule = await new BookingSchedule({
          idbookingroom: newBookingRoom.id,
          idworkinghours: item.idworkinghours,
          static: 0,
        });
        await newBookingSchedule.save();

        const updateWorkingHours = {
          static: 1,
        };
        const workingHours = await WorkingHours.findByIdAndUpdate(
          item.idworkinghours,
          updateWorkingHours,
          {
            new: true,
          }
        );
      });

      const newEvaluate = await new Evaluate({
        idaccount: req.body.idaccount,
        idbookingroom: newBookingRoom.id,
        idroom: arr[0].idroom,
        point: 0,
        content: "",
        static: 0,
        date: datestring,
      });
      await newEvaluate.save();

      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateBookingRoom: async (req, res) => {
    try {
      const updateBookingRoom = {
        static: req.body.static,
      };
      const updateWorkingHours = {
        static: req.body.static,
      };
      const updateBookingSchedule = {
        static: req.body.static,
      };
      const bookingRoom = await BookingRoom.findByIdAndUpdate(
        req.params.id,
        updateBookingRoom,
        {
          new: true,
        }
      );
      if (bookingRoom) {
        const finddata = await BookingSchedule.find({
          idbookingroom: req.params.id,
        });

        finddata.forEach(async (item) => {
          const bookingschedule = await BookingSchedule.findByIdAndUpdate(
            item._id,
            updateBookingSchedule,
            {
              new: true,
            }
          );

          const workinghours = await WorkingHours.findByIdAndUpdate(
            item.idworkinghours,
            updateWorkingHours,
            {
              new: true,
            }
          );
        });
      }
      if (!bookingRoom) {
        return res.status(404).json("Wrong updateAccount!");
      }
      res.status(200).json(bookingRoom);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
  getBookingRoomForBoss: async (req, res) => {
    try {
      const idAccount = req.params.idAccount;
      const listRoom = await Room.find({ idaccount: idAccount });
      if (listRoom.length != 0) {
        let listEvaluate = [];
        let l = listRoom.length;
        const list = listRoom.map(async (item) => {
          const evaluate = await Evaluate.find({ idroom: item._id });
          l = l - 1;
          if (evaluate.length != 0) {
            listEvaluate.push(evaluate);
          }
          if (l == 0) {
            const mergedArray = listEvaluate.reduce(
              (accumulator, currentValue) => {
                return accumulator.concat(currentValue);
              },
              []
            );
            let listBookingRoom = [];
            let l = mergedArray.length;
            mergedArray.map(async (item) => {
              const idBKR = JSON.stringify(item.idbookingroom);
              console.log(idBKR);
              const bk = await BookingRoom.findById(item.idbookingroom);
              if (bk != null) {
                listBookingRoom.push(bk);
              }
              l = l - 1;
              if (l == 0) {
                res.status(200).json(listBookingRoom);
              }
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = BookingRoomController;
