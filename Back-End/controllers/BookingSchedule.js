const BookingSchedule = require("../models/BookingSchedule");

const BookingScheduleController = {
  getAllBookingSchedules: async (req, res) => {
    try {
      const bookingSchedule = await BookingSchedule.find();
      res.status(200).json(bookingSchedule);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteBookingSchedule: async (req, res) => {
    try {
      const bookingSchedule = await BookingSchedule.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getBookingScheduleById: async (req, res) => {
    try {
      const bookingSchedule = await BookingSchedule.findById(req.params.id);
      res.status(200).json(bookingSchedule);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addBookingSchedule: async (req, res) => {
    try {
      const newBookingSchedule = await new BookingSchedule({
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

      await newBookingSchedule.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateBookingSchedule: async (req, res) => {
    try {
      const updateBookingSchedule = req.body;
      const bookingSchedule = await BookingSchedule.findByIdAndUpdate(
        req.params.id,
        updateBookingSchedule,
        {
          new: true,
        }
      );
      if (!bookingSchedule) {
        return res.status(404).json("Wrong updateAccount!");
      }
      res.status(200).json(bookingSchedule);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = BookingScheduleController;
