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
      const workingHours = await WorkingHours.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getWorkingHoursById: async (req, res) => {
    try {
      const workingHours = await WorkingHours.findById(req.params.id);
      res.status(200).json(workingHours);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addWorkingHours: async (req, res) => {
    try {
      const newWorkingHours = await new WorkingHours({
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
