import openai from "./chatgpt";

const queryApi = async (prompt: string, chatId: string, model: string) => {
    
    //TODO: give the model the chat log so it can know what has been said before

  const gptResponse = await openai.completions
    .create({
      model,
      prompt,
      max_tokens: 1000,
      temperature: 0.9,
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    })
    .then((gptResponse) => {
      gptResponse
    })
    .catch((err) => `OpenAI API was not able to respond. (Error: ${err})`);
  return gptResponse;
};

export default queryApi;
