const ImagesCMND = require("../models/ImagesCMND");

const ImagesCMNDController = {
  getAllImagesCMND: async (req, res) => {
    try {
      const imagesCMND = await ImagesCMND.find();
      res.status(200).json(imagesCMND);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteImagesCMND: async (req, res) => {
    try {
      const imagesCMND = await ImagesCMND.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getImagesCMNDById: async (req, res) => {
    try {
      const imagesCMND = await ImagesCMND.findById(req.params.id);
      res.status(200).json(imagesCMND);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addImagesCMND: async (req, res) => {
    try {
      const newImagesCMND = await new ImagesCMND({
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

      await newImagesCMND.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateImagesCMND: async (req, res) => {
    try {
      const updateImagesCMND = req.body;
      const imagesCMND = await ImagesCMND.findByIdAndUpdate(
        req.params.id,
        updateImagesCMND,
        {
          new: true,
        }
      );
      if (!imagesCMND) {
        return res.status(404).json("Wrong updateImagesCMND!");
      }
      res.status(200).json(imagesCMND);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = ImagesCMNDController;
