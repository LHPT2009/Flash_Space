const Province = require("../models/Province");

const ProvinceController = {
  getAllProvince: async (req, res) => {
    try {
      const province = await Province.find();
      res.status(200).json(province);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteProvince: async (req, res) => {
    try {
      const province = await Province.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getProvinceById: async (req, res) => {
    try {
      const province = await Province.findById(req.params.id);
      res.status(200).json(province);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addProvince: async (req, res) => {
    try {
      const newProvince = await new Province({
        provincename: req.body.provincename,
      });

      await newProvince.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateProvince: async (req, res) => {
    try {
      const updateProvince = req.body;
      const province = await Province.findByIdAndUpdate(
        req.params.id,
        updateProvince,
        {
          new: true,
        }
      );
      if (!province) {
        return res.status(404).json("Wrong updateProvince!");
      }
      res.status(200).json(province);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = ProvinceController;
