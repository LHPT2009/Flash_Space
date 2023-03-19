const Evaluate = require("../models/Evaluate");

const EvaluateController = {
  getAllEvaluate: async (req, res) => {
    try {
      const evaluate = await Evaluate.find();
      res.status(200).json(evaluate);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteEvaluate: async (req, res) => {
    try {
      const evaluate = await Evaluate.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getEvaluateById: async (req, res) => {
    try {
      const evaluate = await Evaluate.findById(req.params.id);
      res.status(200).json(evaluate);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addEvaluate: async (req, res) => {
    try {
      const newEvaluate = await new Evaluate({
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

      await newEvaluate.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateEvaluate: async (req, res) => {
    try {
      const updateEvaluate = req.body;
      const evaluate = await Evaluate.findByIdAndUpdate(
        req.params.id,
        updateEvaluate,
        {
          new: true,
        }
      );
      if (!evaluate) {
        return res.status(404).json("Wrong updateEvaluate!");
      }
      res.status(200).json(evaluate);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = EvaluateController;
