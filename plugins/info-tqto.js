import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `╭──〔  THANKS TO  〕─⬣
⫹⫺ ᎪᏞᏞᎪᎻ ᏚᏔᎢ
⫹⫺ ᎾᎡᎪNᏩ ᎢᏌᎪ
⫹⫺ KᎬᏚᎪᏴᎪᎡᎪN
⫹⫺ ᏢᎬNYᎬᎷᎪNᏩᎪᎢ
⫹⫺ ᎪᎠᏆᏔᎪᏓᏚᎻᏆNᏩ
⫹⫺ NᏌᎡᏌᎢᎾᎷᎾ
⫹⫺ ᏆᏚᎢᏆKᎷᎪᏞ
⫹⫺ ᎪᎡᏆFFᏴ
⫹⫺ ᏆᏞᎷᎪN
⫹⫺ ᎪᎷᏆᎡᏌᏞ
⫹⫺ ᎡᎪᏚᎬᏞ
⫹⫺ FᎪᎢᏌᎡ
⫹⫺ ᎡᎾᎷᏆNᎪᎡᏌ
⫹⫺ KᎪNNᎪᏟᎻᎪN
⫹⫺ ᎢᎻᎬ. ᏚᎪᎠ. ᏴᎾY01
⫹⫺ ᎪᎷᎬᏞᏆᎪᏚᏟᎡF
⫹⫺ FᎾKᏌᏚ ᏆᎠ
⫹⫺ ᏓᎾᎻᎪNNᎬᏚ
⫹⫺ ᏴᎡᏌNᎾᏚᎾᏴᎡᏆNᎾ
⫹⫺ KᎡᏆᏚNᎪ
⫹⫺ ᏞᏆᎢᎡᎻᎪᏢ
⫹⫺ ᎡᏞXFᏞY
⫹⫺ ᎪᏆNᎬᎬ
⫹⫺ FᎪᎻᎡᏆ
⫹⫺ ᎠᎪNᏆ ᎾFFᏆᏟᏆᎪᏞ
╰─────────────⬣
`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/bot_whangsaf",
    mediaType: "VIDEO",
    description: "https://Instagram.com/bot_whangsaf", 
    title: 'Simple Bot Esm',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
