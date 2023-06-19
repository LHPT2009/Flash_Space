const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const VirtualAssistantController = {
  ResVirtualAssistant: async (req, res) => {
    try {
      const { contentchatgpt } = req.body;
      const configuration = new Configuration({
        apiKey: process.env.APIKEYOPENAI,
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
