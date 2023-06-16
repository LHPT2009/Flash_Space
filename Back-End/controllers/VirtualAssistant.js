const { Configuration, OpenAIApi } = require("openai");

const VirtualAssistantController = {
  ResVirtualAssistant: async (req, res) => {
    try {
      const { contentchatgpt } = req.body;
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        max_tokens: 1000,
        messages: [
          { role: "system", content: "You are helpful assisant." },
          { role: "user", content: contentchatgpt },
        ],
      });
      res.status(200).json(completion.data.choices[0].message.content);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = VirtualAssistantController;
