const District = require("../models/District");

const DistrictController = {
  getAllDistrict: async (req, res) => {
    try {
      const district = await District.find().populate("idprovince", [
        "provincename",
      ]);
      res.status(200).json(district);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteDistrict: async (req, res) => {
    try {
      const district = await District.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getDistrictById: async (req, res) => {
    try {
      const district = await District.findById(req.params.id);
      res.status(200).json(district);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addDistrict: async (req, res) => {
    try {
      const newDistrict = await new District({
        idprovince: req.body.idprovince,
        districtname: req.body.districtname,
      });

      await newDistrict.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateDistrict: async (req, res) => {
    try {
      const updateDistrict = req.body;
      const district = await District.findByIdAndUpdate(
        req.params.id,
        updateDistrict,
        {
          new: true,
        }
      );
      if (!district) {
        return res.status(404).json("Wrong updateDistrict!");
      }
      res.status(200).json(district);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = DistrictController;
