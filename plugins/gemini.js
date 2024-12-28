const { cmd, commands } = require('../command');
const { Configuration, OpenAIApi } = require("openai");

// Initialize Gemini or OpenAI (Replace with Gemini's equivalent if using their API)
const configuration = new Configuration({
    apiKey: "AIzaSyCzu3TQgsHpKp_FlhuwCJTxy_TkiP_rAQI",
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
        if (!q) return reply("*Please type something for the AI to respond!* 🌚❤️");

        reply("*Thinking...* 🤔");

        // Make an API call to Gemini or OpenAI
        const aiResponse = await openai.createChatCompletion({
            model: "text-davinci-003", // Adjust this for Gemini or other AI
            messages: [
                { role: "system", content: "You are a helpful chatbot named ROBIN_AI." },
                { role: "user", content: q }
            ],
        });

        const responseText = aiResponse.data.choices[0].message.content;

        // Reply with the AI's response
        reply(`*❤️ ROBIN AI ❤️*\n\n${responseText}`);

    } catch (e) {
        console.error(e);
        reply(`*Error:* ${e.message || e}`);
    }
});
