const WorkAssignment = require("../models/WorkAssignment");

const DemoController = {
  demo: async (req, res) => {
    try {
      const workAssignment = await WorkAssignment.aggregate([
        {
          $group: {
            _id: "$idaccount",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            idaccount: "$_id",
            amount: "$count",
          },
        },
      ]);
      const sortarr = workAssignment.sort((a, b) => a.amount - b.amount);
      res.status(200).json(sortarr);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = DemoController;
