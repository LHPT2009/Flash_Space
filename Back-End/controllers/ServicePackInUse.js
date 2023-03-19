const ServicePackInUse = require("../models/ServicePackInUse");

const ServicePackInUseController = {
  getAllServicePackInUse: async (req, res) => {
    try {
      const servicePackInUse = await ServicePackInUse.find();
      res.status(200).json(servicePackInUse);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteServicePackInUse: async (req, res) => {
    try {
      const servicePackInUse = await ServicePackInUse.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getServicePackInUseById: async (req, res) => {
    try {
      const servicePackInUse = await ServicePackInUse.findById(req.params.id);
      res.status(200).json(servicePackInUse);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addServicePackInUse: async (req, res) => {
    try {
      const newServicePackInUse = await new ServicePackInUse({
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

      await newServicePackInUse.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateServicePackInUse: async (req, res) => {
    try {
      const updateServicePackInUse = req.body;
      const servicePackInUse = await ServicePackInUse.findByIdAndUpdate(
        req.params.id,
        updateServicePackInUse,
        {
          new: true,
        }
      );
      if (!servicePackInUse) {
        return res.status(404).json("Wrong updateServicePackInUse!");
      }
      res.status(200).json(servicePackInUse);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = ServicePackInUseController;
