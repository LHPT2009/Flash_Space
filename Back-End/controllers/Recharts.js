const BookingRoom = require("../models/BookingRoom");
const BookingSchedule = require("../models/BookingSchedule");

const DemoController = {
  countbookingroom: async (req, res) => {
    try {
      const bookingRoom = await BookingRoom.aggregate([
        {
          $group: {
            _id: "$date",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            date: "$_id",
            amount: "$count",
          },
        },
      ]);
      res.status(200).json(bookingRoom);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  countbookingschedule: async (req, res) => {
    try {
      const bookingSchedule = await BookingSchedule.find().populate({
        path: "idworkinghours",
        populate: {
          path: "idroom",
          populate: {
            path: "idcareer",
          },
        },
      });

      const newarr = [];
      await bookingSchedule.map((item) => {
        const obj = {
          //   idbookingroom: item.idbookingroom,
          careername: item.idworkinghours.idroom.idcareer.careername,
        };
        newarr.push(obj);
      });

      const countarray = [];

      res.status(200).json(countarray);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = DemoController;
