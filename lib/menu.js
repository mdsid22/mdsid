const fs = require('fs-extra')

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mensublisensikan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/Urbaexyz/whatsapp-bot

Instagram: https://instagram.com/thoriqazzikraa/

Best regards, Thoriq Azzikra.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*
Gatau kenapa yang list block sama prem kebalik hadehhhh

*/

const help = (prefix, jame, betime, blockNumber, prem, banned, cts, waver) => {
    return `
*────Bot Information────*

 *Bot Name : MDSID BOT*
 *Ver : 0.1.0*
 *Premium : ${blockNumber.length} User*
 *Banned : ${banned.length} User*
 *Block  : ${prem.length} User*

*─────────────────*


*┏━──Whatsapp Group*
*┃*
*┗━──────────────*


*▌│█║▌│ █║▌│█│║▌*
  
*┏━──⌜ Sticker & Gif ⌟──*
*┃*
*┃* _:Photo to Sticker_
*┃➥${prefix}stc*
*┃* _:Photo to Sticker Full Size_
*┃➥${prefix}sfull*
*┃* _:Text to Sticker_
*┃➥${prefix}ttp*
*┃* _:Text to Sticker Gif_
*┃➥${prefix}attp*
*┃* _:Video to Sticker Gif_
*┃➥${prefix}stickergif*
*┃* _:Video to Stiker Gif Full Size_
*┃➥${prefix}sgiffull*
*┃* _:ideo to Gif_
*┃➥${prefix}startgif*
*┃* _:Stiker Gif from Giphy_
*┃➥${prefix}stickergiphy*
*┃* _:Stiker to Foto_
*┃➥${prefix}stmg*
*┃* _:Foto to Meme Sticker_
*┃➥${prefix}meme*
*┃*
*┗━────────────────*

*┏━───────────────╮*
*┃➥${prefix}rate*
*┃➥${prefix}kapan*
*┃➥${prefix}apakah*
*┃➥${prefix}bisakah*
*┃➥${prefix}resep*
*┃➥${prefix}aiquote*
*┃➥${prefix}doggo*
*┃➥${prefix}quote*
*┃➥${prefix}cerpen*
*┃➥${prefix}tts*
*┃➥${prefix}bapakfont*
*┃➥${prefix}linkgc*
*┃➥${prefix}adminList*
*┃➥${prefix}ownergc*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}howmuch*
*┃➥${prefix}kalkulator*
*┃➥${prefix}google*
*┃➥${prefix}ptl*
*┃➥${prefix}grupbot*
*┃➥${prefix}read*
*┃➥${prefix}santet*
*┃➥${prefix}saylist*
*┃➥${prefix}addsay*
*┃➥${prefix}say*
*┃➥${prefix}delsay*
*┃➥${prefix}listbacot*
*┃➥${prefix}addbacot*
*┃➥${prefix}bacot*
*┃➥${prefix}delbacot*
*┃➥${prefix}jadian*
*┃➥${prefix}infobmkg*
*┃➥${prefix}bucin*
*┃➥${prefix}tahta*
*┃➥${prefix}tebakgambar*
*┃➥${prefix}kusonime*
*┃➥${prefix}quotesen*
*┃➥${prefix}gsmarena*
*┃➥${prefix}imgtourl*
*┃➥${prefix}missing*
*┃➥${prefix}darkjokes*
*┃➥${prefix}trendingtwit*
*┃➥${prefix}memeindo*
*┃➥${prefix}kodenuklir*
*┃➥${prefix}convertduit*
*┃➥${prefix}iplocation*
*┃➥${prefix}simi*
*┃➥${prefix}simi2*
*┃➥${prefix}bot*
*┃➥${prefix}reverseword*
*┃➥${prefix}happymod*
*┃➥${prefix}shortlink*
*┃➥${prefix}linknobg*
*┃➥${prefix}foliokiri*
*┃➥${prefix}foliokanan*
*┃➥${prefix}raingif*
*┃➥${prefix}randomquran*
*┃➥${prefix}translate*
*┃➥${prefix}tr*
*┃➥${prefix}kisahnabi*
*┃➥${prefix}fiersa*
*┃➥${prefix}buatgrup*
*┃➥${prefix}afk*
*┃➥${prefix}take*
*┃➥${prefix}sgifwm*
*┃➥${prefix}addstiker*
*┃➥${prefix}delstiker*
*┃➥${prefix}liststiker*
*┃➥${prefix}addvn*
*┃➥${prefix}delvn*
*┃➥${prefix}listvn*
*┃➥${prefix}addimg*
*┃➥${prefix}delimg*
*┃➥${prefix}listimg*
*┃➥${prefix}shitposting*
*┃➥${prefix}ayatkursi*
*┃➥${prefix}quotesislam*
*┃➥${prefix}doaharian*
*┃➥${prefix}postig*
*┃➥${prefix}kalender*
*┃➥${prefix}bioskop*
*┃➥${prefix}infoloker*
*┃➥${prefix}luassegitiga*
*┃➥${prefix}kelsegitiga*
*┃➥${prefix}luaspersegi*
*┃➥${prefix}kelpersegi*
*┃➥${prefix}kuadrat*
*┃➥${prefix}kubik*
*┃➥${prefix}perkalian*
*┃➥${prefix}jadwaltvnow*
*┃➥${prefix}jadwaltv*
*┃➥${prefix}randomkpop*
*┃➥${prefix}xnxxsearch*
*┃➥${prefix}xnxx*
*┃➥${prefix}arrowsigns*
*┃➥${prefix}rcitacita*
*┃➥${prefix}ceritahorror*
*┃➥${prefix}wanted*
*┃➥${prefix}triggered*
*┃➥${prefix}burn*
*┃➥${prefix}trash*
*┃➥${prefix}stickerline*
*┃➥${prefix}readmore*
*┃➥${prefix}3dphoto*
*┃➥${prefix}pensil*
*┃➥${prefix}pensil2*
*┃➥${prefix}lolivid*
*┃➥${prefix}ppcp*
*┃➥${prefix}wikihow*
*┃➥${prefix}sfile*
*┃➥${prefix}sfiledown*
*┃➥${prefix}tobecontinue*
*┃➥${prefix}thuglife*
*┃➥${prefix}memeindo2*
*┃➥${prefix}manga*
*┃➥${prefix}imgtopdf*
*┃➥${prefix}pencilart*
*┃➥${prefix}sindiran*
*┃➥${prefix}ceritahorror2*
*┃➥${prefix}ppcp2*
*┃➥${prefix}givecolor*
*┃➥${prefix}faktaunik*
*┃➥${prefix}postigurl*
*┃➥${prefix}level*
*┃➥${prefix}leaderboard*
*┃➥${prefix}ssweb*
*┃➥${prefix}ssweb2*
*┃➥${prefix}ytplaylist*
*┃➥${prefix}appstore*
*┃➥${prefix}mtk*
*┃➥${prefix}twister*
*┃➥${prefix}dankmemes*
*┃➥${prefix}phsearch*
*┃➥${prefix}bacamanga*
*┃➥${prefix}carimanga*
*┃➥${prefix}javhd*
*┃➥${prefix}javporn*
*┃➥${prefix}creepyfact*
*┃➥${prefix}cosplayer*
*┃➥${prefix}tobijak*
*┃➥${prefix}cnnindo*
*┃➥${prefix}zodiakmingguan*
*┃➥${prefix}gabut*
*┃➥${prefix}marvel*
*┃➥${prefix}discord*
*┃➥${prefix}infoapp*
*┃➥${prefix}bbcindo*
*┃➥${prefix}qotd*
*┃➥${prefix}maps*
*┗━───────────────╯*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜ Stalk & Search Sosmed ⌟:

*┏━───────────────╮*
*┃➥${prefix}stalkig*
*┃➥${prefix}igstalk*
*┃➥${prefix}githubstalk*
*┃➥${prefix}stalktiktok*
*┃➥${prefix}stalkyt*
*┃➥${prefix}stalktwitter*
*┃➥${prefix}searchuser*
*┗━───────────────╯*

*▌│█║▌│ █║▌│█│║▌*

⌜ Downloader & Media ⌟:

*┏━───────────────╮*
*┃➥${prefix}fb*
*┃➥${prefix}fb2*
*┃➥${prefix}fb3*
*┃➥${prefix}ytdl*
*┃➥${prefix}pinterest*
*┃➥${prefix}pinterestdown*
*┃➥${prefix}pinimg*
*┃➥${prefix}ig*
*┃➥${prefix}ig2*
*┃➥${prefix}igstory*
*┃➥${prefix}igstory2*
*┃➥${prefix}igreels*
*┃➥${prefix}ytshorts*
*┃➥${prefix}play*
*┃➥${prefix}play2*
*┃➥${prefix}play3*
*┃➥${prefix}tiktok*
*┃➥${prefix}tiktok2*
*┃➥${prefix}tiktok3*
*┃➥${prefix}tiktoknowm*
*┃➥${prefix}tiktokaudio*
*┃➥${prefix}ytsearch*
*┃➥${prefix}trendingyt*
*┃➥${prefix}trendmusic*
*┃➥${prefix}trendgaming*
*┃➥${prefix}ytmp3*
*┃➥${prefix}ytmp4*
*┃➥${prefix}ytmp4hd*
*┃➥${prefix}twitter*
*┃➥${prefix}joox*
*┃➥${prefix}tomp3*
*┃➥${prefix}spotify*
*┃➥${prefix}spotify2*
*┃➥${prefix}spotifysearch*
*┃➥${prefix}spotifydown*
*┃➥${prefix}whatsong*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_


⌜t̶e̶n̶t̶a̶n̶g  ̶b̶o̶t̶ ⌟:


*┏━───────────────╮*
*┃➥${prefix}tnc*
*┃➥${prefix}discordserver*
*┃➥${prefix}donasi*
*┃➥${prefix}botstat*
*┃➥${prefix}ownerbot*
*┃➥${prefix}join*
*┃➥${prefix}reportbug*
*┃➥${prefix}runtime*
*┃➥${prefix}shutdown*
*┃➥${prefix}eval*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_


*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Runtime: ${cts}*
*┃➥WA Version: ${waver}*
*┗━━━━━━━━━━━━━━━━━┛*

Thank's y'all for use to my Bot
`
}
exports.help = help

const owner = (prefix) => {
    return `
⌜Owner Bot⌟:

*┏━───────────────╮*
*┃➥${prefix}exec*
*┃➥${prefix}exif*
*┃➥${prefix}eval*
*┃➥${prefix}mute*
*┃➥${prefix}unmute*
*┃➥${prefix}ban* <reply msg member>
*┃➥${prefix}pban* <nomor>
*┃➥${prefix}punban* <nomor>
*┃➥${prefix}unban* <reply msg member>
*┃➥${prefix}deleteban*
*┃➥${prefix}oaddprem*
*┃➥${prefix}odelprem*
*┃➥${prefix}bc*
*┃➥${prefix}bcgrup*
*┃➥${prefix}leaveall*
*┃➥${prefix}clearall* 
*┃➥${prefix}setstatus*
*┃➥${prefix}setpic*
*┃➥${prefix}screen*
*┃➥${prefix}addcogan*
*┃➥${prefix}addcecan*
*┃➥${prefix}delallstik*
*┃➥${prefix}delallvn*
*┃➥${prefix}delallimg*
*┃➥${prefix}oblock* <reply pesan member>
*┃➥${prefix}block*  <nomor>
*┃➥${prefix}unblock* <reply pesan member>
*┃➥${prefix}unblocked* <nomor>
*┃➥${prefix}deleteleft*
*┃➥${prefix}deletewelcome*
*┃➥${prefix}listleft*
*┃➥${prefix}listwelcome*
*┗━───────────────╯*`
}
exports.owner = owner
/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

const admin = (prefix) => {
    return `
*┏━────Admin Group*
*┃*
*┃➥${prefix}welcome*
*┃➥${prefix}left*
*┃➥${prefix}add*
*┃➥${prefix}kick* <reply pesan orang yang ingin dikick>
*┃➥${prefix}pkick* <tag member yang ingin dikick>
*┃➥${prefix}promote* @tag
*┃➥${prefix}opromote* <reply pesan yang ingin dipromote>
*┃➥${prefix}odemote* <reply pesan yang ingin didemote>
*┃➥${prefix}demote* @tag
*┃➥${prefix}infoall*
*┃➥${prefix}del*
*┃➥${prefix}leveling on/off*
*┃➥${prefix}seticon*
*┃➥${prefix}revoke link gc*
*┃➥${prefix}setgroupname*
*┃➥${prefix}resend*
*┃➥${prefix}bokep*
*┃➥${prefix}edotensei*
*┃➥${prefix}oedotensei* <reply pesan member>
*┃➥${prefix}nsfw on/off*
*┃*
*┗━──────────────╯*

_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}
exports.admin = admin

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Pulsa : 

Saweria : 
Trakteer : 
Paypal  :
OVO : 
Terimakasih. 

-MDSID `
}

exports.kodebahasa = () => {
    return `
Kode Bahasa : 

Afrikaans: "af",
Albanian: "sq",
Amharic: "am",
Arabic: "ar",
Armenian: "hy",
Azerbaijani: "az",
Basque: "eu",
Belarusian: "be",
Bengali: "bn",
Bosnian: "bs",
Bulgarian: "bg",
Catalan: "ca",
Cebuano: "ceb",
Chichewa: "ny",
Chinese Simplified: "zh-cn",
Chinese Traditional: "zh-tw",
Corsican: "co",
Croatian: "hr",
Czech: "cs",
Danish: "da",
Dutch: "nl",
English: "en",
Esperanto: "eo",
Estonian: "et",
Filipino: "tl",
Finnish: "fi",
French: "fr",
Frisian: "fy",
Galician: "gl",
Georgian: "ka",
German: "de",
Greek: "el",
Gujarati: "gu",
Haitian Creole: "ht",
Hausa: "ha",
Hawaiian: "haw",
Hebrew: "iw",
Hindi: "hi",
Hmong: "hmn",
Hungarian: "hu",
Icelandic: "is",
Igbo: "ig",
Indonesian: "id",
Irish: "ga",
Italian: "it",
Japanese: "ja",
Javanese: "jw",
Kannada: "kn",
Kazakh: "kk",
Khmer: "km",
Korean: "ko",
Kurdish (Kurmanji): "ku",
Kyrgyz: "ky",
Lao: "lo",
Latin: "la",
Latvian: "lv",
Lithuanian: "lt",
Luxembourgish: "lb",
Macedonian: "mk",
Malagasy: "mg",
Malay: "ms",
Malayalam: "ml",
Maltese: "mt",
Maori: "mi",
Marathi: "mr",
Mongolian: "mn",
Myanmar (Burmese): "my",
Nepali: "ne",
Norwegian: "no",
Pashto: "ps",
Persian: "fa",
Polish: "pl",
Portuguese: "pt",
Punjabi: "ma",
Romanian: "ro",
Russian: "ru",
Samoan: "sm",
Scots Gaelic: "gd",
Serbian: "sr",
Sesotho: "st",
Shona: "sn",
Sindhi: "sd",
Sinhala: "si",
Slovak: "sk",
Slovenian: "sl",
Somali: "so",
Spanish: "es",
Sundanese: "su",
Swahili: "sw",
Swedish: "sv",
Tajik: "tg",
Tamil: "ta",
Telugu: "te",
Thai: "th",
Turkish: "tr",
Ukrainian: "uk",
Urdu: "ur",
Uyghur: "ug",
Uzbek: "uz",
Vietnamese: "vi",
Welsh: "cy",
Xhosa: "xh",
Yiddish: "yi",
Yoruba: "yo",
Zulu: "zu"`
}

exports.kodenuklir = () => {
    return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`
}
