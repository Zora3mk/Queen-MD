/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
  
══════════════════════════════════════════════════════════════════════════
                            ( OWNER  DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ Queen Multi-device Whatsapp Bot
✅ Coded By Zora 
══════════════════════════════════════════════════════════════════════════
                              ( CONTACT ME )
══════════════════════════════════════════════════════════════════════════
✅ Telegram: @zorrrrrra
✅ Whatsapp: +96171350883
✅ Instagram: @nozex___
✅ Youtube: @VEOEDITING
✅ TikTok: @.nozex                                                                                                     
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ @project_name Zora-Md [WA Multi-device]
✅ @author Zora
✅ @description A WhatsApp based 3ʳᵈ party application that provide many 
   services with a real-time automated conversational experience
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT RULES )
══════════════════════════════════════════════════════════════════════════
✅ If you want to recode, reupload
   or copy the codes/script,
   please Contact me;
✅ If the recoded/reupload or copy script? "i will take action immediately"
✅ © 2022 Queen Bot Inc.Technical Hacker Team
✅ God Bless You, Family and Myself
══════════════════════════════════════════════════════════════════════════
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
    zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
    'https://zenzapis.xyz': '805a6c3fa9',
}

// Apikeyyy
bear = 'FreeApikey'

global.herokuapi = process.env.HEROKU_API_KEY
global.herokuapp = process.env.HEROKU_APP_NAME
// Other
let fake = process.env.OWNER_NUMBER
global.owner = ['+06171350883',`${fake}`]
global.ownername = process.env.Zora
global.ownernomer = process.env.+96171350883
global.premium = ['+96171350883',`${fake}`]
global.packname = process.env.Zora Bot
global.author = process.env.Zora
global.darkwinzocontact = '9'+'4'+'7'+'7'+'5'+'2'+'0'+'0'+'9'+'3'+'5'
global.botname = 'Z'+'O'+'R'+'A'+'B'+'O'+'T'
global.sessionName = 's'+'e'+'s'+'s'+'i'+'o'+'n'+'.'+'z'+'o'+'r'+'r'+'a'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '*تم برذر...✓*',
    admin: 'ذا الأمر مخصص للرجالة الادمن بس تصير رجال تعال جربه !',
    botAdmin: 'لازم اكون ادمن حتى اقدر اشغل ذا الأمر 🥲.',
    premime: 'مميزات بيريميوم اذا بدك تاخذهم اكتب (Rental)',
    owner: 'ذا الأمر مخصص لعمك زورا بس !',
    group: 'මෙම විධානය සාදා ඇත්තේ *Groups* සඳහා පමණි !',
    private: 'මෙම විධානය සාදා ඇත්තේ *Private Chats* සඳහා පමණි !',
    bot: 'මෙම විධානය භාවිතා කළ හැක්කේ මගේ *Owner number* එක සඳහා  පමණි !',
    wait: 'انتظر شوي يروحي...⏳️',
    endLimit: 'خلص وقت البوت, البوت بيتجدد كل 12 ساعه برذر.',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./src/Media/Image/Queen.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }
global.contactme = '+'+'9'+'4'+'7'+'7'+'5'+'2'+'0'+'0'+'9'+'3'+'5'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
