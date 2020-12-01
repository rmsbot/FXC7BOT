exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `
  
Follow My Ig : https://www.instagram.com/itsmeikyxsec404
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️


         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
        
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──᚜ *DONASI* ᚛────╮
┃│1. *PULSA: 081281872699*
┃│2. *OVO  : 081281872699*
┃╰───────────────
┣━━━━━━━━━━━━━━━━━━━━┓
┃▶      *${BotName}*         ❥
┣━━━━━━━━━━━━━━━━━━━━┛
┃╭──᚜ *SOSMED ADMIN* ᚛──╮
┃│1. *Telegram*
┃│ _${grupch1}_
┃│2. *YouTube <subscribe>*
┃│ _${grupch2}_
┃│3. *Instagram <Follow>*
┃│ _${instagramlu}_
┃│4. *Creator ${BotName}*
┃│ _${whatsapplu}_
┃╰─────────────────
┣━━━━━━━━━━━━━━━━━━━━┓
┃▶   _*Powered By ItsmeikyXSec404*_       ❥
┗━━━━━━━━━━━━━━━━━━━━┛
`
}

