const ImagesCMND = require("../models/ImagesCMND");
const path = require("path");
const sharp = require("sharp");

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

  updateImagesCMNDHaveImage: async (req, res) => {
    try {
      const updateImagesCMND = {
        frontimage: req.files[0].filename,
        backimage: req.files[1].filename,
        numbercard: req.body.numbercard,
        name: req.body.name,
        birth: req.body.birth,
        sex: req.body.sex,
        address: req.body.address,
        datecard: req.body.datecard,
        staticimage: 1,
        static: 0,
      };
      const imagesCMND = await ImagesCMND.findByIdAndUpdate(
        req.params.id,
        updateImagesCMND,
        {
          new: true,
        }
      );

      req.files.forEach((item) => {
        let compressedImageFileSavePath = path.join(
          __dirname,
          "../images",
          item.filename
        );

        sharp(item.path)
          .jpeg({
            quality: 80,
            chromaSubsampling: "4:4:4",
          })
          .toFile(compressedImageFileSavePath);
      });

      if (!imagesCMND) {
        return res.status(404).json("Wrong updateImagesCMND!");
      }
      res.status(200).json(imagesCMND);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },

  updateImagesCMNDHaveNotImage: async (req, res) => {
    try {
      const updateImagesCMND = {
        frontimage: "",
        backimage: "",
        numbercard: req.body.numbercard,
        name: req.body.name,
        birth: req.body.birth,
        sex: req.body.sex,
        address: req.body.address,
        datecard: req.body.datecard,
        staticimage: 0,
        static: 1,
      };
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
  updateStaticImageCMND: async (req, res) => {
    try {
      const updateImagesCMND = {
        static: req.body.static,
      };
      const imagesCMND = await ImagesCMND.findByIdAndUpdate(
        req.params.id,
        updateImagesCMND,
        {
          new: true,
        }
      );
      if (!imagesCMND) {
        return res.status(404).json("Wrong updateStaticImagesCMND!");
      }
      res.status(200).json(imagesCMND);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = ImagesCMNDController;
