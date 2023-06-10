const WorkingHours = require("../models/WorkingHours");

const WorkingHoursController = {
  getAllWorkingHours: async (req, res) => {
    try {
      const workingHours = await WorkingHours.find();
      res.status(200).json(workingHours);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteWorkingHours: async (req, res) => {
    try {
      await WorkingHours.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getWorkingHoursById: async (req, res) => {
    try {
      const workingHours = await WorkingHours.find({
        idroom: req.params.id,
        date: req.body.date,
      })
        .populate("idtimeslot")
        .populate("idroom");
      res.status(200).json(workingHours);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getDateByIdRoom: async (req, res) => {
    try {
      const workingHours = await WorkingHours.find({
        idroom: req.params.idRoom,
      });
      const listDate = [];
      await workingHours.map((item) => {
        if (!listDate.includes(item.date)) {
          listDate.push({ day: item.date });
        }
      });
      res.status(200).json(listDate);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addWorkingHours: async (req, res) => {
    try {
      const newWorkingHours = await new WorkingHours({
        idtimeslot: req.body.idtimeslot,
        idroom: req.body.idroom,
        date: req.body.date,
        static: 0,
      });
      await newWorkingHours.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateWorkingHours: async (req, res) => {
    try {
      const updateWorkingHours = req.body;
      const workingHours = await WorkingHours.findByIdAndUpdate(
        req.params.id,
        updateWorkingHours,
        {
          new: true,
        }
      );
      if (!workingHours) {
        return res.status(404).json("Wrong updateWorkingHours!");
      }
      res.status(200).json(workingHours);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = WorkingHoursController;
