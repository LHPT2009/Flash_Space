const WorkAssignment = require("../models/WorkAssignment");

const WorkAssignmentController = {
  getAllWorkAssignment: async (req, res) => {
    try {
      const workAssignment = await WorkAssignment.find();
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
      const workAssignment = await WorkAssignment.findById(req.params.id);
      res.status(200).json(workAssignment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addWorkAssignment: async (req, res) => {
    try {
      const newWorkAssignment = await new WorkAssignment({
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
      if (!workAssignment) {
        return res.status(404).json("Wrong updateWorkAssignment!");
      }
      res.status(200).json(workAssignment);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = WorkAssignmentController;
