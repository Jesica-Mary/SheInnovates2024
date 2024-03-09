import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.API_KEY);

export const askGemini = async (prompt) => {
    console.log(prompt);
    try {
        const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
