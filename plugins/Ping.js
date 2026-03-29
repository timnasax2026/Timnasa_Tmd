import config from '../config.cjs';

const ping = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ').toLowerCase() : '';

  if (cmd === "ping") {
    try {
      const start = new Date().getTime();

      // Reaction ya haraka kuonyesha bot imepokea amri
      await m.React('⚡');

      const end = new Date().getTime();
      const responseTime = (end - start) / 1000;

      const statusText = `*🚀 TIMNASA TECH SPEED: ${responseTime.toFixed(2)}ms*\n\n*🛰️ Status:* Online\n*💎 Mode:* Public`;

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

    } catch (error) {
      console.error("Ping Error:", error);
    }
  }
};

export default ping;
