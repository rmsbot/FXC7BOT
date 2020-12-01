exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `*INFO ${BotName}*
	
Follow My Ig : https://www.instagram.com/itsmeikyxsec404
  
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──᚜ *READ MORE* ᚛────╮
┃│1. *#info*
┃│2. *#donasi*
┃│3. *#readme*
┃╰─────────────────
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
┗━━━━━━━━━━━━━━━━━━━━┛`
}
