const Staff = require("../models/Staff");

const StaffController = {
  getAllStaff: async (req, res) => {
    try {
      const staff = await Staff.find();
      res.status(200).json(staff);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteStaff: async (req, res) => {
    try {
      const staff = await Staff.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getStaffById: async (req, res) => {
    try {
      const staff = await Staff.findById(req.params.id);
      res.status(200).json(staff);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addStaff: async (req, res) => {
    try {
      const newStaff = await new Staff({
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

      await newStaff.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateStaff: async (req, res) => {
    try {
      const updateStaff = req.body;
      const staff = await Staff.findByIdAndUpdate(req.params.id, updateStaff, {
        new: true,
      });
      if (!staff) {
        return res.status(404).json("Wrong updateStaff!");
      }
      res.status(200).json(staff);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = StaffController;
