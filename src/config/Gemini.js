
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyDHTHq7mFgwB-Zr9h5rwWbfe0Kvh6daD3c";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "\n",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "hi\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Hi there! How can I help you today?\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response= result.response
    console.log(result.response.text());
    return response.text();
    
  }
  
  export default run;