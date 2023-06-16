const { Configuration, OpenAIApi } = require("openai");

const VirtualAssistantController = {
  ResVirtualAssistant: async (req, res) => {
    try {
      const { contentchatgpt } = req.body;
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createCompletion(
        {
          model: "text-davinci-003",
          prompt: contentchatgpt,
          max_tokens: 512,
          temperature: 0,
        },
        {
          // timeout: 1000,
          headers: {
            Authorization:
              "Bearer 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",
          },
        }
      );
      res.status(200).json(completion.data.choices[0].text.replace(/\n/g, ""));
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = VirtualAssistantController;
