const BotName = 'RMS BOT'; // Nama Bot Whatsapp
const instagramlu = 'https://www.instagram.com/itsmeikyxsec404'; // Nama Instagram
const whatsapplu = 'Wa.me/+6281281872699'; // Nomor whatsapp
const kapanbotaktif = 'Tergantung Owner'; // Kapan bot lu aktif
const grupch1 = 'https://t.me/itsmeiky';
const grupch2 = 'Nothing';
//
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const menu = require("./lib/menu.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const readme = require("./lib/readme.js");
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] FXC7BOT Ready scan now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @ItsmeikyXSec404`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @_farhan_xcode7`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes("!buatgrup"))
   {
var nama = text.split("!buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

if(text.includes("!cek")){
var num = text.replace(/.cek/ , "08311800241")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik *#menu* untuk Fitur Bot' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik *#menu* untuk Fitur Bot' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik *#menu* untuk Fitur Bot' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik *#menu* untuk Fitur Bot' ,MessageType.text);
}
else if (text == '!owner'){
conn.sendMessage(id, `Owner *${BotName}* wa.me/628311800241` ,MessageType.text);
}

// Fitur

if (text.includes("!say")){
  const teks = text.replace(/!say /, "")
conn.sendMessage(id, teks, MessageType.text)
}
if (text.includes("!infoig")){
  const stalk = text.replace(/!infoig /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/stalk?username=${teks}`).then ((res) =>{
  let pesan = `[ WAIT ] Sedang Diproses ❗ tunggu sebentar`;
  conn.sendMessage(id, pesan, MessageType.text);
  let hasil = `BIODATA INSTAGRAM DENGAN NAMA _${teks}_ \n\n *Username✍️* : _${res.data.Username}_ \n *Nama✍️* : _${res.data.Name}_ \n *Jumlah Followers✍️* : _${res.data.Jumlah_Followers}_ \n *Jumlah_Following✍️* : _${res.data.Jumlah_Following}_ \n *Jumlah_Post✍️* : _${res.data.Jumlah_Post}_\nProfil pic: ${res.data.Profile_pic}\n\n*_Powered By ItsmeikyXSec404_*`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text.includes("!infogempa")){
  const infogempa = text.replace(/!infogempa /, "")
  axios.get(`https://alfians-api.herokuapp.com/api/infogempa`).then ((res) =>{
  let pesan = `[ WAIT ] Sedang Diproses❗ tunggu sebentar`;
  conn.sendMessage(id, pesan, MessageType.text);
  let hasil = ` *INFO GEMPA* \n\ *Lokasi* : _${res.data.lokasi}_ \n *Kedalaman✍️* : _${res.data.kedalaman}_ \n *Koordinat✍️* : _${res.data.koordinat}_ \n *Magnitude✍️* : _${res.data.magnitude}_ \n *Waktu✍️* : _${res.data.waktu}_\n ✍️Potensi: ${res.data.potensi}\nMap: ${res.data.map} \n\n_*Powered By ItsmeikyXSec404*_`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}

if (text.includes("!qtsbucin")) {
const qtsbucin = text.replace(/!qtsbucin /, "")
axios.get(`https://api.terhambar.com/qts/`).then((res) => {
	 let pesan = `[ WAIT ] Sedang Diproses❗`;
	 conn.sendMessage(id, pesan, MessageType.text);
     let quote = `Quotes Bucin Untukmu\n\n *${res.data.quotes}* \n\n*_Powered By ItsmeikyXSec404_*`;
conn.sendMessage(id, quote, MessageType.text);
})
}
if (text.includes("!chord")){
const teks = text.replace(/!chord /, "")
axios.get(`https://alfians-api.herokuapp.com/api/chord?q=${teks}`).then((res) => {
      let pesan =`[ WAIT ] Sedang Mencari chord lagu *${teks}*`;
      conn.sendMessage(id, pesan, MessageType.text);
      let hasil = `*Nih Cord Lagu ${teks} kak* \n\nCord: _${res.data.result}_ \n\n_*Powered By ItsmeikyXSec404*_`;
    conn.sendMessage(id, hasil, MessageType.text);
})
}

if (text.includes("!ytmp4")){
const teks = text.replace(/!ytmp4 /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
    let pesan =`[ WAIT ] Sedang Diproses❗`;
    conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `Link : *${teks}*\n\n✅Video Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawahn\nJudul: ${res.data.title}\n\nthumbnail: ${res.data.thumb}\nSize: ${res.data.filesize}\nResolusi: ${res.data.resolution}\nLink download: ${res.data.result}\n\n*_Powered By ItsmeikyXSec404_*`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!ytmp3")){
const teks = text.replace(/!ytmp3 /, "")
axios.get(`http://scrap.terhambar.com/yta?link=${teks}`).then((res) => {
	let pesan = `[ WAIT ] Sedang Diproses❗`;
	conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `Link : *${teks}*\n\n✅Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawahn\nJudul: ${res.data.title}\nSize: ${res.data.filesize}\nDowmload: ${res.data.result}\n\n_*Powered By ItsmeikyXSec404*_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!twt")){
const teks = text.replace(/!twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
	let pesan = `[ WAIT ] Sedang Diproses❗`;
	conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `Link : *${teks}*\n\nBerhasil✓ silahkan klik link di bawah untuk mendownload hasilnya\nKlik link dibawah\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}\n\n*_Powered By ItsmeikyXSec404_*`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!tts")){
const teks = text.replace(/!tts /, "")
const gtts = (`https://rest.farzain.com/api/tts.php?id=${teks}`)
    conn.sendMessage(id, gtts ,MessageType.text);
}

if (text.includes("!tiktok")) {
const tictoc = text.replace(/!tiktok /, "")
axios.get(`http://scrap.terhambar.com/tiktokfull?link=${teks}`).then((res) => {
	 let pesan = `[ WAIT ] Sedang Diproses❗`;
	 conn.sendMessage(id, pesan, MessageType.text);
     let titoe = `Link : *${teks}*\n\nBerhasil✓ Silahkan klik link dibawah ini untuk mendownload hasilnya \nKlik link dibawah\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}\n\n*_Powered By ItsmeikyXSec404_*`;
conn.sendMessage(id, titoe, MessageType.text);
})
}

if (text.includes("!pin")) {
const teks = text.replace(/!pin /, "")
axios.get(`http://api.fdci.se/sosmed/rep.php?gambar=${teks}`).then((res) => {
	 let pesan = `[ WAIT ] Sedang Diproses❗`;
	 conn.sendMessage(id, pesan, MessageType.text);
     let pin = `Link: ${teks}\n Message: ${res.data.msg}\n Domain: ${res.data.domain}\n Thumbnail: ${res.data.thumbnail}\n Title: ${res.data.title}\n Extension: ${res.data.ext}\n resolusi: ${res.data.resolution}\n Size: ${res.data.size}\n\n*_Powered By ItsmeikyXSec404_*`;
conn.sendMessage(id, pin, MessageType.text);
})
}
if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`http://scrap.terhambar.com/fb?link=${teks}`).then((res) => {
let pesan = `[ WAIT ] Sedang Diproses❗`;
conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `Link : *${teks}*\n\nDownload sendiri melalui link dibawah ya, takut servernya down xixi..\n${res.data.result}\nJudul: ${res.data.title}\n\nLink: ${res.data.linkVideo}\n\n*_Powered By ItsmeikyXSec404_*`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!ig")){
const teks = text.replace(/!ig /, "")
axios.get(`https://alfians-api.herokuapp.com/api/ig?url=${teks}`).then((res) => {
let pesan = `[ WAIT ] sedang diproses❗`;
conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `Link : *${teks}*\n\nDownload Link: ${res.data.result}\n\n*_Powered By ItsmeikyXSec404_*`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//new
if (text.includes("!worldcovid")){
const covidworld = text.replace(/!worldcovid /, "")
axios.get(`https://api.terhambar.com/`).then((res) => {
let pesan  = `[ WAIT ] Tunggu sebentar❗`;
conn.sendMessage(id, pesan, MessageType.text);
let hasil = `*Pandemi Covid Didunia*\nNegara: ${res.data.negara}\nTotal: ${res.data.total}\nKasus Baru: ${res.data.kasus_baru}\nMeninggal: ${res.data.meninggal}\nBaru Meninggal ${res.data.meninggal_baru}\nSembuh: ${res.data.sembuh}\nPenangan: ${res.data.penanganan}\nKritis: ${res.data.kritis}\nUpdate: ${res.data.update}`;
conn.sendMessage(id, hasil, MessageType.text);
let foter = `*_Powered By ItsmeikyXSec404_*`;
conn.sendMessage(id, foter, MessageType.text);
})
}

if (text.includes("!wiki")){
const teks = text.replace(/!wiki /, "")
axios.get(`https://alfians-api.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
	let pesan = `[ WAIT ] Sedang diproses❗`;
	conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `Yang Kamu Cari Tentang : *${teks}*\n\n❗Menurut Wikipedia adalah:\n\n${res.data.result}\n\n*_Powered By ItsmeikyXSec404_*`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!sholat")){
  const teks = text.replace(/!sholat /, "")
  axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${teks}`).then ((res) =>{
  let pesan = `[ WAIT ] Sedang Mencari Jadwal Di Daerah *${teks}*❗`;
  conn.sendMessage(id, pesan, MessageType.text);
  let hasil = `Jadwal sholat di *${teks}* hari ini adalah\n\n❗Imsyak : ${res.data.Imsyak}\n❗Subuh : ${res.data.Subuh} WIB\n❗Dzuhur : ${res.data.Dzuhur}WIB\n❗Ashar : ${res.data.Ashar} WIB\n❗Maghrib : ${res.data.Maghrib}\n❗Isya : ${res.data.Isya} WIB\n❗Tengah malam : ${res.data.Dhuha} WIB\n\n*_Powered By ItsmeikyXSec404_*`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
else if (text == '!quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let pesan = `Tunggu Sebentar Gan`;
    conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})\n\n_*Powered By ItsmeikyXSec404*_`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!namaninja")){
const teks = text.replace(/!namaninja /, "")
axios.get(`https://api.terhambar.com/ninja?nama=${teks}`).then((res) => {
	let pesan = `[ WAIT ] Sedang diproses❗`;
	conn.sendMessage(id, pesan, MessageType.text);
    let hasil = `*${teks}* Nama Ninja kamu adalah:\n\n *${res.data.result}* \n\n*_Powered By ItsmeikyXSec404_*`;
    conn.sendMessage(id, hasil, MessageType.text);
})
}
if (text == '#menu'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
let pesan = `Jika Bingung untuk Perintah/command nya ketik *#readme*\n\n*_Powered By ItsmeikyXSec404_*`;
conn.sendMessage(id, pesan, MessageType.text);
}
else if (text == '#donate'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
let pesan = `Oke Gan Jangan Lupa Donasinya😁\n\n*_Powered By ItsmeikyXSec404_*`;
conn.sendMessage(id, pesan, MessageType.text);
}
else if (text == '#DONATE'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#DONASI'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donate.donate(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
}
else if (text == '#info'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
let pesan = `Jangan Lupa ketik *#donasi* untuk berdonasi😁`;
conn.sendMessage(id, pesan, MessageType.text);
}
else if (text == '#readme'){
  const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, readme.readme(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) ,MessageType.text);
let pesan = `Jangan Lupa ketik *#donasi* Untuk Berdonasi Gan😁`;
conn.sendMessage(id, pesan, MessageType.text);
}
else if (text == '!foto'){
conn.sendMessage(id, 'command Salah yg bener gini lurr\n\n *!foto cewek/cowok*\n\nContoh: *!foto cewek*' ,MessageType.text);
}
else if (text == '!foto cewe'){
conn.sendMessage(id, '❗Perintah Salah❗\n\nYg Bener *!foto cewek*', MessageType.text);
}
else if (text == '!foto cowo'){
conn.sendMessage(id, '❗Perintah Salah❗\n\nYg Bener *!foto cowok*', MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '!sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
         let pesan = `[ WAIT ] Sedang proses membuat stiker`;
         conn.sendMessage(id, pesan, MessageType.text);
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   }
   if (text.includes("!covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`🔎DATA WABAH COVID-19 TERBARU DI INDONESIA🔍\n\n📈Positif ==> ${positif} \n📉Sembuh ==> ${sembuh} \n📋Meninggal ==> ${meninggal}\n🗒️Dirawat ==> ${dirawat}`, MessageType.text);
}
   if (text.includes("!quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
\n_${kata}_
      \n\n\n*~${author}*\n\n_*Powered By ItsmeikyXSec404*_     
    `, MessageType.text);});
   }
   
   if (text.includes("!hentai"))
   {
    var url = "https://myanimelist.net/forum/?board=2";
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var anim =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(anim) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }


   
   if (text.includes("!loli"))
   {
    var items = ["anime loli","anime loli sange","anime loli fackgirll","anime loli i love you"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
    
if (text.includes("!pokemon"))
   {
    var items = ["anime pokemon"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

   else if (text.includes("!nama")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Arti dari nama *${teks}* adalah

┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

          ${h}
         
 *_Powered By ItsmeikyXSec404_*
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

`,
 MessageType.text);
 let pesan = `\nNihh kak Jangan Lupa Ketik *#donasi* gan:)`;
 conn.sendMessage(id, pesan, MessageType.text);
  });
  }
  else if (text.includes("!pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      let pesan = `[ WAIT ] Sedang Diproses❗`;
      conn.sendMessage(id, pesan, MessageType.text);
      conn.sendMessage(id, `

┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

 *Kecocokan berdasarkan nama*


 ${d}

*_Powered By ItsmeikyXSec404_*
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

    `, MessageType.text);
 let pes = `\nBuset Cocok Gan👍`;
 conn.sendMessage(id, pes, MessageType.text);
  });
  }
   if (text.includes("!foto cewek"))
   {
    var items = ["cewek remaja selebgram", "cewek remaja cans", "cewek remaja bugil", "cewek remaja sexy", "cewek remaja montok", "cewe remaja cantik", "hijab sexy", "remaja cantik", "remaja montok"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
    let pesan = `[ WAIT ] Sedang mencari foto janda❗`;
    conn.sendMessage(id, pesan, MessageType.text);
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes("!foto cowok"))
   {
    var items = ["selebgram cowok", "cowo ganteng", "cogan", "cowok indo ganteng", "artis cowok ganteng", "cogan 2020"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  let pesan = `[ WAIT ] Sedang mencari foto cogan❗`;
  conn.sendMessage(id, pesan, MessageType.text);
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes("!fotoanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    } 
//new
if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!fakta')
      {

         fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let randomnix = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, randomnix, MessageType.text)
            });
      }
   }
if (text.includes("!lirik")){
	const teks = text.split("!lirik ")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	    let pesan = `[ WAIT ] Sedang mencari lirik lagu *${teks}*`;
	    conn.sendMessage(id, pesan, MessageType.text);
	 	let hasil = `🎶lirik🎶 lagu ${teks} \n\n\n ${res.data.result.lirik}\n\n\n*_Powered By ItsmeikyXSec404_*`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes("!alay")){
	const alay = text.split("!alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `*${res.data.text}*`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}

if (text.includes('!nulis')){
  var teks = text.replace(/!nulis /, '')
    axios.get('https://bangandre.herokuapp.com/nulis?teks='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            let pesan = `[ WAIT ] Sedang Menulis❗`;
            conn.sendMessage(id, pesan, MessageType.text);
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

/*
request.get('http://api.fdci.se/cerpen', {json: true}, (error, response, body) => {
   if (!error || response.statusCode == 200) {
     console.log(JSON.stringify(body))
   } else { return throw error }
 })endMessage
*/

})

