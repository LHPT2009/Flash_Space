const Ward = require("../models/Ward");

const WardController = {
  getAllWard: async (req, res) => {
    try {
      const ward = await Ward.find();
      res.status(200).json(ward);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteWard: async (req, res) => {
    try {
      const ward = await Ward.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getWardById: async (req, res) => {
    try {
      const ward = await Ward.findById(req.params.id);
      res.status(200).json(ward);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addWard: async (req, res) => {
    try {
      const newWard = await new Ward({
        iddistrict: req.body.iddistrict,
        wardname: req.body.wardname,
      });

      await newWard.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateWard: async (req, res) => {
    try {
      const updateWard = req.body;
      const ward = await Ward.findByIdAndUpdate(req.params.id, updateWard, {
        new: true,
      });
      if (!ward) {
        return res.status(404).json("Wrong updateWard!");
      }
      res.status(200).json(ward);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = WardController;
