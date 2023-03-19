const Position = require("../models/Position");

const PositionController = {
  getAllPosition: async (req, res) => {
    try {
      const position = await Position.find();
      res.status(200).json(position);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deletePosition: async (req, res) => {
    try {
      const position = await Position.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getPositionById: async (req, res) => {
    try {
      const position = await Position.findById(req.params.id);
      res.status(200).json(position);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addPosition: async (req, res) => {
    try {
      const newPosition = await new Position({
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

      await newPosition.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updatePosition: async (req, res) => {
    try {
      const updatePosition = req.body;
      const position = await Position.findByIdAndUpdate(
        req.params.id,
        updatePosition,
        {
          new: true,
        }
      );
      if (!position) {
        return res.status(404).json("Wrong updatePosition!");
      }
      res.status(200).json(position);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = PositionController;
