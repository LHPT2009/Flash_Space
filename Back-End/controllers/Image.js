const Image = require("../models/Image");

const ImageController = {
  getAllImage: async (req, res) => {
    try {
      const image = await Image.find();
      res.status(200).json(image);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteImage: async (req, res) => {
    try {
      const image = await Image.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getImageById: async (req, res) => {
    try {
      const image = await Image.findById(req.params.id);
      res.status(200).json(image);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addImage: async (req, res) => {
    try {
      const newImage = await new Image({
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

      await newImage.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateImage: async (req, res) => {
    try {
      const updateImage = req.body;
      const image = await Image.findByIdAndUpdate(req.params.id, updateImage, {
        new: true,
      });
      if (!image) {
        return res.status(404).json("Wrong updateImage!");
      }
      res.status(200).json(image);
    } catch (error) {
      res.status(500).json("Error!!!");
    }
  },

  getImageByIdRoom: async (req, res) => {
    try {
      const images = await Image.find({ idroom: req.params.idroom });
      if (images) {
        res.status(200).json(images);
      } else {
        res.status(404).json("No Image!");
      }
    } catch (error) {
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = ImageController;
