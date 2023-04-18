const TimeSlot = require("../models/TimeSlot");

const TimeSlotController = {
  getAllTimeSlot: async (req, res) => {
    try {
      const timeSlot = await TimeSlot.find();
      res.status(200).json(timeSlot);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteTimeSlot: async (req, res) => {
    try {
      const timeSlot = await TimeSlot.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getTimeSlotById: async (req, res) => {
    try {
      const timeSlot = await TimeSlot.findById(req.params.id);
      res.status(200).json(timeSlot);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addTimeSlot: async (req, res) => {
    try {
      const newTimeSlot = await new TimeSlot({
        starttime: req.body.starttime,
        endtime: req.body.endtime,
      });

      await newTimeSlot.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateTimeSlot: async (req, res) => {
    try {
      const updateTimeSlot = req.body;
      const timeSlot = await TimeSlot.findByIdAndUpdate(
        req.params.id,
        updateTimeSlot,
        {
          new: true,
        }
      );
      if (!timeSlot) {
        return res.status(404).json("Wrong updateTimeSlot!");
      }
      res.status(200).json(timeSlot);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = TimeSlotController;
