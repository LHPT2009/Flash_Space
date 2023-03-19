const Permission = require("../models/Permission");

const PermissionController = {
  getAllPermission: async (req, res) => {
    try {
      const permission = await Permission.find();
      res.status(200).json(permission);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deletePermission: async (req, res) => {
    try {
      const permission = await Permission.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getPermissionById: async (req, res) => {
    try {
      const permission = await Permission.findById(req.params.id);
      res.status(200).json(permission);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addPermission: async (req, res) => {
    try {
      const newPermission = await new Permission({
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

      await newPermission.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updatePermission: async (req, res) => {
    try {
      const updatePermission = req.body;
      const permission = await Permission.findByIdAndUpdate(
        req.params.id,
        updatePermission,
        {
          new: true,
        }
      );
      if (!permission) {
        return res.status(404).json("Wrong updatePermission!");
      }
      res.status(200).json(permission);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = PermissionController;
