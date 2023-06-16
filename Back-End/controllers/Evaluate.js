const Evaluate = require("../models/Evaluate");
const { Configuration, OpenAIApi } = require("openai");

const EvaluateController = {
  getAllEvaluate: async (req, res) => {
    try {
      const evaluate = await Evaluate.find()
        .populate("idaccount")
        .populate("idroom")
        .populate("idbookingroom");
      res.status(200).json(evaluate);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteEvaluate: async (req, res) => {
    try {
      await Evaluate.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getEvaluateByIdbookingroom: async (req, res) => {
    try {
      const evaluate = await Evaluate.findOne({ idbookingroom: req.params.id });
      res.status(200).json(evaluate);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getEvaluateById: async (req, res) => {
    try {
      const evaluate = await Evaluate.findById(req.params.id)
        .populate("idaccount")
        .populate("idroom")
        .populate("idbookingroom");
      res.status(200).json(evaluate);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getListEvaluateByIdRoom: async (req, res) => {
    try {
      const evaluate = await Evaluate.find({ idroom: req.params.id }).populate(
        "idaccount"
      );
      res.status(200).json(evaluate);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addEvaluate: async (req, res) => {
    try {
      const newEvaluate = await new Evaluate({
        idaccount: req.body.idaccount,
        idbookingroom: req.body.idbookingroom,
        idroom: req.body.idroom,
        point: req.body.point,
        content: req.body.content,
        static: 0,
      });
      await newEvaluate.save();
      res.status(200).json("Add successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateEvaluate: async (req, res) => {
    try {
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        max_tokens: 1000,
        messages: [
          { role: "system", content: "You are helpful assisant." },
          {
            role: "user",
            content: `"${req.body.content}" hãy kiểm tra câu trên và xem xét nó có chứa nội dung tiêu cực hay không? trả lời tốm tắt một trong hai đáp án 'có' hoặc 'không'?`,
          },
        ],
      });

      console.log(completion.data.choices[0].message.content);

      let static = 0;
      if (completion.data.choices[0].message.content == "Không.") {
        static = 1;
      }
      if (completion.data.choices[0].message.content == "Có.") {
        static = 0;
      }
      const updateEvaluate = {
        idaccount: req.body.idaccount,
        idroom: req.body.idroom,
        idbookingroom: req.body.idbookingroom,
        point: req.body.point,
        content: req.body.content,
        static: static,
        date: req.body.date,
      };
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
      res.status(500).json("Error!!!");
    }
  },

  updateEvaluateStatic: async (req, res) => {
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
      res.status(500).json("Error!!!");
    }
  },
};

module.exports = EvaluateController;
