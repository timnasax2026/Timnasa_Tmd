import config from '../config.cjs';
import os from 'os';

const ping = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ').toLowerCase() : '';

  if (cmd === "ping") {
    const start = new Date().getTime();

    const reactionEmojis = ['⚡', '🚀', '💎', '✨', '🌀'];
    const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];

    await m.React(reactionEmoji);

    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;
    
    // Maelezo ya mfumo kwa ajili ya mwonekano wa kisasa
    const usedMemory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);

    const statusText = `
*🚀 TIMNASA TECH STATUS*
    
*⚡ Speed:* ${responseTime.toFixed(2)}ms
*📟 RAM:* ${usedMemory}MB / ${totalMemory}GB
*🛰️ Status:* Online
    `.trim();

    await Matrix.sendMessage(m.from, {
      image: { url: 'https://files.catbox.moe/oduq6k.jpg' },
      caption: statusText,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363406146813524@newsletter',
          newsletterName: "Timnasa-Tech",
          serverMessageId: 143
        },
        externalAdReply: {
          title: "TIMNASA NEXT FUTURE TMD",
          body: "System Latency Check",
          thumbnailUrl: 'https://files.catbox.moe/oduq6k.jpg',
          sourceUrl: 'https://whatsapp.com/channel/0029VaFytp9LNSa8NInX9M2p',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  }
};

export default ping;
