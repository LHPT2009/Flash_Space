const BookingRoom = require("../models/BookingRoom");
const BookingSchedule = require("../models/BookingSchedule");
const WorkingHours = require("../models/WorkingHours");
const Evaluate = require("../models/Evaluate");

const BookingRoomController = {
  getAllBookingRoom: async (req, res) => {
    try {
      const bookingRoom = await BookingRoom.find();
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
      });
      await newEvaluate.save();

      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateBookingRoom: async (req, res) => {
    try {
      const updateBookingRoom = req.body;
      const bookingRoom = await BookingRoom.findByIdAndUpdate(
        req.params.id,
        updateBookingRoom,
        {
          new: true,
        }
      );
      if (!bookingRoom) {
        return res.status(404).json("Wrong updateAccount!");
      }
      res.status(200).json(bookingRoom);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = BookingRoomController;
