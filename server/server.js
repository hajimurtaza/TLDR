// require('dotenv').config();
// const express = require("express");
// const { Configuration, OpenAIApi } = require("openai");
// const cors = require("cors"); 

// const app = express();
// const port = 3000;
// const apiKey = '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';

// const configuration = new Configuration({
//   apiKey: apiKey,
// });
// const openai = new OpenAIApi(configuration);

// app.use(express.json());
// app.use(cors());

// app.post("/chat", async (req, res) => {
//   const { message } = req.body;

//   const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: message }],
//   });

//   const reply = completion.data.choices[0].message.content;

//   res.json({ reply });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const axios = require("axios").default;

const options = {
  method: "POST",
  url: "https://api.edenai.run/v2/text/summarize",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTczM2Y2MmItMmMwOC00MWEzLWI4MTItZmY0Y2JlNDQ4Y2NmIiwidHlwZSI6ImFwaV90b2tlbiJ9.vB_P2T2xDT473-fuublEFv7xgSEwYOoi7lUnB-H7_tQ",
  },
  data: {
    output_sentences: 3,
    // providers: "microsoft,connexun,openai,emvista",
    providers: "microsoft",
    text: "Barack Hussein Obama is an American politician who served as the 44th president of the United States from 2009 to 2017.",
    language: "en",
    fallback_providers: "",
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
