//                    :¨·.·¨: - 🐆🥽💕
//                     `·.. ⋆-  𝐇𝐞𝐲𝐲 𝐢𝐭'𝐬 me Robin ⚡️!
//                    ╭ → ❝ Multi Device Whatsapp Bot ❞ 
//                    ┊🛍💞𝓨𝗼𝘂'𝗿𝗲 𝗽𝗲𝗿𝗳𝗲𝗰𝘁! 
//                    ✰ Give me a star ! 
//                    ✩ + _𝘀𝗺𝗶𝗹𝗲 all time
//                    ╰ → 🥽🐆🏄‍♀️⚡️🤭




//                    ˚∧＿∧  　+        —̳͟͞͞💗
//                    (  •‿• )つ  —̳͟͞͞ 💗         —̳͟͞͞💗 +
//                    (つ　 <                —̳͟͞͞💗
//                    ｜　 _つ      +  —̳͟͞͞💗         —̳͟͞͞💗 ˚
//                    `し´


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KJFm1YTR#jZD7sQYQ8SzZZdJKOjlbyNBew1Xf_7o4t8sMyY1NeDc",
MONGODB: process.env.MONGODB || "mongodb://mongo:wUgAuMxTmGvnyihBBnKiTvNIOiUiYSSU@autorack.proxy.rlwy.net:54588",
OWNER_NUM: process.env.OWNER_NUM || "94704101989", // Remove this number and add your number with country code
OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
};
