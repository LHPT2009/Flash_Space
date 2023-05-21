const WorkAssignment = require("../models/WorkAssignment");
const Room = require("../models/Room");

const WorkAssignmentController = {
  getAllWorkAssignment: async (req, res) => {
    try {
      const workAssignment = await WorkAssignment.find()
        .populate({
          path: "idroom",
          populate: {
            path: "idward",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "idprovince",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "iddistrict",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "idcareer",
          },
        })
        .populate("idaccount");
      res.status(200).json(workAssignment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteWorkAssignment: async (req, res) => {
    try {
      const workAssignment = await WorkAssignment.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getWorkAssignmentById: async (req, res) => {
    try {
      const workAssignment = await WorkAssignment.findById(req.params.id)
        .populate({
          path: "idroom",
          populate: {
            path: "idward",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "idprovince",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "iddistrict",
          },
        })
        .populate({
          path: "idroom",
          populate: {
            path: "idcareer",
          },
        })
        .populate("idaccount")
        .populate({
          path: "idroom",
          populate: {
            path: "idaccount",
          },
        });
      res.status(200).json(workAssignment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addWorkAssignment: async (req, res) => {
    try {
      const newWorkAssignment = await new WorkAssignment({
        idtimeslot: req.body.idtimeslot,
        idroom: req.body.idroom,
        date: req.body.date,
        static: 0,
      });

      await newWorkAssignment.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateWorkAssignment: async (req, res) => {
    try {
      const updateWorkAssignment = req.body;
      const workAssignment = await WorkAssignment.findByIdAndUpdate(
        req.params.id,
        updateWorkAssignment,
        {
          new: true,
        }
      );
      const searchwa = await WorkAssignment.findById(req.params.id);
      const updateroom = await Room.findByIdAndUpdate(
        searchwa.idroom,
        updateWorkAssignment,
        {
          new: true,
        }
      );
      if (!workAssignment) {
        return res.status(404).json("Wrong updateWorkAssignment!");
      }
      if (!updateroom) {
        return res.status(404).json("Wrong updateroom!");
      }
      res.status(200).json(workAssignment);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = WorkAssignmentController;
