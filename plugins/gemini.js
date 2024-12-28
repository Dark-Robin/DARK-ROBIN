const { cmd, commands } = require('../command');
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: config.OPENAI_API_KEY, // Use environment variable
});
const openai = new OpenAIApi(configuration);

cmd({
    pattern: "chat",
    alias: ["ai", "bot"],
    desc: "Chat with AI",
    category: "utilities",
    filename: __filename
},
async (robin, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, pushname, reply }) => {
    try {
        if (!q.trim()) return reply("*Please type something for the AI to respond!* 🌚❤️");
        if (q.length > 1000) return reply("*Your query is too long. Please shorten it!* 🌚❤️");

        reply("*Thinking...* 🤔");

        const aiResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo", // Optimized for chat
            messages: [
                { role: "system", content: "You are a helpful chatbot named ROBIN_AI." },
                { role: "user", content: q }
            ],
        });

        const responseText = aiResponse.data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request.";
        reply(`*❤️ ROBIN AI ❤️*\n\n${responseText}`);
    } catch (e) {
        console.error("Error in AI Command:", e);
        reply(`*Error:* ${e.response?.data?.error?.message || e.message || e}`);
    }
});

