// 𝐁𝐘 𝐂𝐑𝐀𝐙𝐘 𝐃𝐄𝐕 𝐆𝐈𝐕𝐄 𝐂𝐑𝐄𝐃𝐈𝐓:
//𝐖𝐀.𝐌𝐄/24165730123

const { cmd } = require("../command");
const moment = require("moment");

let botStartTime = Date.now(); // Enregistrement de l'heure de démarrage du bot
const ALIVE_IMG = "https://files.catbox.moe/tljvav.jpeg"; // Assurez-vous que cette URL est valide

cmd({
    pattern: "test",
    desc: "Check if the bot is active.",
    category: "info",
    react: "✨",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User"; // Nom de l'utilisateur ou valeur par défaut
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        const formattedInfo = `
🎐𝗖𝗥𝗔𝗭𝗬 𝗠𝗗 𝗩2 𝗧𝗘𝗦𝗧𝗜𝗡𝗚🎐
ʜᴇʏ ✌️ ${pushname}
┏━━━━ • ✿ • ━━━━
*|🕒 ᴛɪᴍᴇ : ${currentTime}*
*|📅 ᴅᴀᴛᴇ : ${currentDate}*
*|⏳ ᴜᴘᴛɪᴍᴇ : ${runtimeHours}* ʜᴏᴜʀs, ${runtimeMinutes} ᴍɪɴᴜᴛᴇs, ${runtimeSeconds} sᴇᴄᴏɴᴅᴇs
┗━━━━ • ✿ • ━━━━
> ᴄʀᴀᴢʏ ᴠ2 ɪᴛs ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴇᴀᴅʏ ᴊᴜsᴛ ᴛʏᴘᴇ .ᴍᴇɴᴜ

© ᴄʀᴀᴢʏ ᴅᴇᴠ🍃
        `.trim();

        // Vérifier si l'image est définie
        if (!ALIVE_IMG || !ALIVE_IMG.startsWith("http")) {
            throw new Error("Invalid ALIVE_IMG URL. Please set a valid image URL.");
        }

        // Envoyer le message avec image et légende
        await conn.sendMessage(from, {
            image: { url: ALIVE_IMG }, // Assurez-vous que l'URL est valide
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411838274335@newsletter',
                    newsletterName: '𝐂𝐑𝐀𝐙𝐘 𝐓𝐄𝐒𝐓',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
        
        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/d8qqch.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363411838274335@newsletter',
                    newsletterName: '𝐂𝐑𝐀𝐙𝐘 𝐓𝐄𝐒𝐓',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        // Répondre avec des détails de l'erreur
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});