const ServicePackInUse = require("../models/ServicePackInUse");

const ServicePackInUseController = {
  getAllServicePackInUse: async (req, res) => {
    try {
      const servicePackInUse = await ServicePackInUse.find()
        .populate("idaccount")
        .populate("idservicepack");
      res.status(200).json(servicePackInUse);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteServicePackInUse: async (req, res) => {
    try {
      await ServicePackInUse.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getServicePackInUseById: async (req, res) => {
    try {
      const servicePackInUse = await ServicePackInUse.findById(req.params.id)
        .populate("idaccount")
        .populate("idservicepack");
      res.status(200).json(servicePackInUse);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addServicePackInUse: async (req, res) => {
    try {
      const countmonth = req.body.duration;
      const datenow = new Date();
      const daynow =
        datenow.getDate() < 10 ? `0${datenow.getDate()}` : datenow.getDate();
      const monthnow =
        datenow.getMonth() < 10
          ? `0${datenow.getMonth() + 1}`
          : datenow.getMonth() + 1;
      const yearnow = datenow.getFullYear();
      const formatdaynow = `${yearnow}-${monthnow}-${daynow}`;

      const date = new Date();
      date.setMonth(date.getMonth() + countmonth);
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const month =
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      const year = date.getFullYear();
      const formatday = `${year}-${month}-${day}`;

      const newServicePackInUse = await new ServicePackInUse({
        idaccount: req.body.idaccount,
        idservicepack: req.body.idservicepack,
        starttime: formatdaynow,
        endtime: formatday,
        static: 1,
      });
      await newServicePackInUse.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateServicePackInUse: async (req, res) => {
    try {
      const updateServicePackInUse = req.body;
      const servicePackInUse = await ServicePackInUse.findByIdAndUpdate(
        req.params.id,
        updateServicePackInUse,
        {
          new: true,
        }
      );
      if (!servicePackInUse) {
        return res.status(404).json("Wrong updateServicePackInUse!");
      }
      res.status(200).json(servicePackInUse);
    } catch (error) {
      console.log(error);
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = ServicePackInUseController;
