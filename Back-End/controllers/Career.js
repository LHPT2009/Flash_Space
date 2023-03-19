const Career = require("../models/Career");

const CareerController = {
  getAllCareer: async (req, res) => {
    try {
      const career = await Career.find();
      res.status(200).json(career);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteCareer: async (req, res) => {
    try {
      const career = await Career.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCareerById: async (req, res) => {
    try {
      const career = await Career.findById(req.params.id);
      res.status(200).json(career);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addCareer: async (req, res) => {
    try {
      const newCareer = await new Career({
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

      await newCareer.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCareer: async (req, res) => {
    try {
      const updateCareer = req.body;
      const career = await Career.findByIdAndUpdate(
        req.params.id,
        updateCareer,
        {
          new: true,
        }
      );
      if (!career) {
        return res.status(404).json("Wrong updateAccount!");
      }
      res.status(200).json(career);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = CareerController;
