const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
🔥 *${config.BOT_NAME}* 🔥
│👑 *Owner:* ${config.OWNER_NAME}
│🌀 *Baileys:* Multi Device
│💻 *Type:* NodeJs
│☁️ *Platform:* Heroku
│🌐 *Mode:* [${config.MODE}]
│⚡ *Prefix:* [${config.PREFIX}]
│🛠 *Version:* 3.0.0 Bᴇᴛᴀ
└───────────────

╔════════🌟 *NOVA* 𝗕𝗢𝗧 🌟════════╗

┃
┃ 📥 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮
┃ ╰━━━━━━━━━━━━━━━⪼
┃  🎬  .capcut
┃  🎵  .ringtone
┃  📲  .tiktok2
┃  🔍  .tiktoksearch
┃  📸  .Instagram
┃  🌀  .fb2
┃  👻  .snapchat
┃  🐦  .twitter
┃  📂  .mediafire
┃  📥  .apk
┃  📂  .gdrive
┃  ⬇️  .gdrive
┃  💡  .likee
┃  📌  .pinterest
┃  🔎  .spotifysearch
┃  🔎  .yts
┃  🎥  .mp4
┃  🎼  .mp3
┃  📹  .video
┃  🎥  .video5
┃  🎧  .play
┃  🎶  .play3
┃  📼  .play5
┃  🖼️  .img
┃
┃ 🤖 𝐀𝐈 𝐌𝐞𝐧𝐮
┃ ╰━━━━━━━━━━━━━━━⪼
┃  🤖  .ai
┃  🤖  .chatgpt2
┃  🤖  .openai
┃  🤖  .deepseek
┃  🤖  .fluxai
┃  🤖  .imagine2
┃  🤖  .imagine3
┃  🤖  .wallpaper
┃  🤖  .image
┃
┃ 🔄 𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮
┃ ╰━━━━━━━━━━━━━━━⪼
┃  🔄  .sticker
┃  🔄  .topdf
┃  🔄  .gif
┃  🔄  .attp
┃  🔄  .tts
┃  🔄  .tts2
┃  🔄  .tts3
┃  🔄  .trt
┃  🔄  .fancy
┃  🔄  .gitclone
┃  🔄  .url
┃  🔄  .logo
┃  🔄  .fetch
┃  🔄  .emoji
┃  🔄  .enhance
┃  🔄  .remini
┃  🔄  .removebg
┃  🔄  .getimage
┃
┃ 🖼️ 𝐀𝐧𝐢𝐦𝐞 𝐈𝐦𝐚𝐠𝐞𝐬
┃ ╰━━━━━━━━━━━━━━━⪼
┃  🖼️  .anime
┃  🖼️  .anime1
┃  🖼️  .anime2
┃  🖼️  .anime3
┃  🖼️  .anime4
┃  🖼️  .anime5
┃  🖼️  .garl
┃  🖼️  .waifu
┃  🖼️  .neko
┃  🖼️  .maid
┃  🖼️  .awoo
┃  🖼️  .animegirl
┃  🖼️  .animegirl1
┃  🖼️  .animegirl2
┃  🖼️  .animegirl3
┃  🖼️  .animegirl4
┃  🖼️  .animegirl5
┃  🖼️  .dog
┃
┃ 💬 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧𝐬
┃ ╰━━━━━━━━━━━━━━━⪼
┃  😍  .cry
┃  😍  .cuddle
┃  😍  .bully
┃  😍  .hug
┃  😍  .awoo
┃  😍  .lick
┃  😍  .pat
┃  😍  .smug
┃  😍  .bonk
┃  😍  .yeet
┃  😍  .blush
┃  😍  .handhold
┃  😍  .highfive
┃  😍  .nom
┃  😍  .wave
┃  😍  .smile
┃  😍  .wink
┃  😍  .happy
┃  😍  .glomp
┃  😍  .bite
┃  😍  .poke
┃  😍  .cringe
┃  😍  .dance
┃  😍  .kill
┃  😍  .slap
┃  😍  .kiss
┃
┃ 🎉 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮
┃ ╰━━━━━━━━━━━━━━━⪼
┃  🎉  .emix
┃  🎉  .joke
┃  🎉  .hack
┃
┃ 👥 𝐆𝐫𝐨𝐮𝐩 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬
┃ ╰━━━━━━━━━━━━━━━⪼
┃  👥  .tagall
┃  👥  .kickall
┃  👥  .kickall2
┃  👥  .kick
┃  👥  .removeadmins
┃  👥  .leave
┃  👥  .join
┃  👥  .invite
┃  👥  .resetglink
┃  👥  .jid
┃  👥  .forward
┃  👥  .removecountry
┃  👥  .kickco
┃
┃ 🧩 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮
┃ ╰━━━━━━━━━━━━━━━⪼
┃  🧩  .ytsearch
┃  🧩  .githubstalk
┃  🧩  .tiktokstalk
┃  🧩  .wikipedia
┃  🧩  .movie
┃  🧩  .swb
┃  🧩  .weather
┃
┃ 👑 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮
┃ ╰━━━━━━━━━━━━━━━⪼
┃  👑  .alive
┃  👑  .version
┃  👑  .antidelete
┃  👑  .fullpp
┃  👑  .vv6
┃  👑  .vv
┃  👑  .save
┃  👑  .send
┃  👑  .sendme
┃  👑  .sand
┃  👑  .chatbot on/off
┃  👑  .env
┃  👑  .allvar
┃  👑  .repo
┃  👑  .sc
┃  👑  .script
┃  👑  .update
┃  👑  .menu
┃  👑  .owner
┃  👑  .broadcast
┃  👑  .siminfo
┃  👑  .sim
┃  👑  .sim2
┃  👑  .ping
┃  👑  .speed
┃  👑  .fetch
┃  👑  .report
┃  👑  Anticall
┃  👑  Antilink
┃  👑  Reacts
┃  👑  Heartreacts
┃  👑  Status View
┃  👑  Status Reacts
┃  👑  Status Reply
┃  👑  Status Saver
┃  👑  Status Sendr
┃  👑  Antiviewones
┃  👑  Group We'll Come Bye
┃  👑  Group Promote Demote

╚═════════*_BY IMALSHA_*═════════╝


*${config.DESCRIPTION}*`;

        await conn.sendMessage(from, { image: { url: config.MENU_IMAGE_URL }, caption: dec }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
