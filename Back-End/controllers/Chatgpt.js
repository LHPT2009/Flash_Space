// const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");

const ChatgptController = {
  chatGPT: async (req, res) => {
    try {
      //   const { prompt } = req.body;
      //   const config = new Configuration({
      //     apiKey: "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",
      //   });
      //   const openai = new OpenAIApi(config);
      //   const completion = await openai.createCompletion({
      //     model: "text-davince-003",
      //     max_tokens: 512,
      //     temperature: 0,
      //     prompt: prompt,
      //   });
      //   res.status(200).json(completion.data.choices[0].text);
      //   res.status(200).json("đã nhận");

      const prompt = req.body.prompt;
      const openaiApiKey =
        "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"; // Thay YOUR_API_KEY bằng API key của bạn từ OpenAI
      const url = "https://api.openai.com/v1/engines/davinci-codex/completions";
      const data = {
        prompt: prompt,
        max_tokens: 50, // Số lượng từ tối đa mà OpenAI sẽ trả về
        temperature: 0.7, // Điều chỉnh độ "sáng tạo" của phản hồi, từ 0.0 đến 1.0
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      };
      const response = await axios.post(url, data, { headers });
      const chatResult = response.data.choices[0].text.trim();
      res.status(200).json(chatResult);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = ChatgptController;
