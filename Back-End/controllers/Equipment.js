const Equipment = require("../models/Equipment");

const EquipmentController = {
  getAllEquipment: async (req, res) => {
    try {
      const equipment = await Equipment.find();
      res.status(200).json(equipment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteEquipment: async (req, res) => {
    try {
      const equipment = await Equipment.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getEquipmentById: async (req, res) => {
    try {
      const equipment = await Equipment.findById(req.params.id);
      res.status(200).json(equipment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addEquipment: async (req, res) => {
    try {
      const newEquipment = await new Equipment({
        equipmentname: req.body.equipmentname,
      });

      await newEquipment.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateEquipment: async (req, res) => {
    try {
      const updateEquipment = req.body;
      const equipment = await Equipment.findByIdAndUpdate(
        req.params.id,
        updateEquipment,
        {
          new: true,
        }
      );
      if (!equipment) {
        return res.status(404).json("Wrong updateEquipment!");
      }
      res.status(200).json(equipment);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = EquipmentController;
