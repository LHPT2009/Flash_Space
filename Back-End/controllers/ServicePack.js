const ServicePack = require("../models/ServicePack");

const ServicePackController = {
  getAllServicePack: async (req, res) => {
    try {
      const servicePack = await ServicePack.find();
      res.status(200).json(servicePack);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteServicePack: async (req, res) => {
    try {
      const servicePack = await ServicePack.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getServicePackById: async (req, res) => {
    try {
      const servicePack = await ServicePack.findById(req.params.id);
      res.status(200).json(servicePack);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addServicePack: async (req, res) => {
    try {
      const newServicePack = await new ServicePack({
        name: req.body.name,
        price: req.body.price,
        content: req.body.content,
        duration: req.body.duration,
      });

      await newServicePack.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateServicePack: async (req, res) => {
    try {
      const updateServicePack = req.body;
      const servicePack = await ServicePack.findByIdAndUpdate(
        req.params.id,
        updateServicePack,
        {
          new: true,
        }
      );
      if (!servicePack) {
        return res.status(404).json("Wrong updateServicePack!");
      }
      res.status(200).json(servicePack);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = ServicePackController;
