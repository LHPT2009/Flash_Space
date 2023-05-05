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
      console.log("xuất vị trí đầu tiên:");
      console.log(workAssignment[0]);
      res.status(200).json(workAssignment);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = DemoController;
