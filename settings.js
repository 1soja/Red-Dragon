const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.alivemsg = `📤I am alive now😇
🤷‍♀️How can I help you?😉` //Costomize Alive Message (type your message in `` )


global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.vcardowner = ['+917306004019'] // owner number
global.ownername = "😎𝐋Σ𝚯•ᗷ𝚯𝐘" // owner name
global.ytname = "" // yt chanel name
global.socialm = "GitHub: mr__leo__boy_10" // github or insta name
global.location = "India, Mizoram, Aizawl" // location

//bot body 
global.alivepic = `https://i.ibb.co/cyyCjN7/20220803-081426.png` // alive picture \\ use "https://ibb.com" to upload photos. < 1 MB

global.dragonchat = "false"  // chat bot  "true" / "false" (200 auto replies in this)
global.callblock = "false" // call block "true" / "false" ("true"  to block callers)
global.antibad = "false" // To remove bad word senders
global.antispam = "true" // To remove or block spammers
global.antilink = "false" // To remove group link sharing peoples
global.upsongvoice = "false" // true/false \\ bot can upload song as voice note (it use your data and storage bacause auto download) you can put "false" (anyone can't get songs as voice note / your data is not wasted)
global.welcom_msg = "true" // Welcome / Goodbye   [true/false]


global.owner = ['+917306004019']
global.ownertag = '+917306004019' //your tag number
global.botname = '⸙⃝̸̸̸̸̸𝑳𝑬𝑶̸˵𝑩𝑶̸𝒀̅˵𝑬̽𝑭̽𝑿̽͢' //ur bot name
global.packname = "⎾⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃪⃟𝙇⃬⃬⃬̌̽̽̽𝙀⃬⃬⃬⃬⃬⃬̥̥̥̥𝙊̧⃬⃬⃬̬̬̬⭟𝘽⃬⃬⃬̻̻̻̻𝙊⃬⃬⃬̂̂̂̂̂𝙔⎷̶̶̶̶̶̶̶̶̶̶⃯⃯⃯⃯𝙀⃬⃬⃬⃬̽̽̽̽̽𝙁⃬⃬⃬˟⭝𝙓⃬⃬⃬˟⛥⃕͢͢͢͢͢͢͢͢͢ " // sticker packname
global.author = "⸙⃝̸̸̸̸̸𝑳𝑬𝑶̸˵𝑩𝑶̸𝒀̅" // sticker author
global.dragonemoji = '🧩' // Menu emoji
global.footer = '[ ◉ ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ᴍᴅ ]' //

//database
global.premium = ['+12267748504'] //ur premium numbers

//other
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sp = '💠'
global.mess = {
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    linkm: 'Where is the link?',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban',
    badwords: '*🚫Bad Words Not Allowed Here !*\n\n⚠️ Warning... ⚠️',
    spam: '⚠️ [SPAM] Detected ⚠️\n\nThe emergency security system was activated.\n\nPowered By: *ʀᴇᴅ-ᴅʀᴀɢᴏɴ*',
    caption: 'Generated by: ◉ *ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ʙᴏᴛ*'
} // END \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thum = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur error pic
global.thumb = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic

global.thumb = fs.readFileSync('./Android/AllData/theme/repl.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []





































// DO NOT CHANGE THIS. ERROR WARNING දාන්න තැනක් නැතුව මෙතන දැම්මෙ.
global.rep = { // All Replies = 145
    K1: 'හ hi😁 ❤ ️',
    K2: 'හූ Hui✌ ️ 💞 🫶',
    K3: 'හ hi😂',
    K4: 'හූ Hui😊',
    K5: 'හේ Hey, Haw Aw U🥴 ✌ ️',
    K6: '😁Hey there💝 I am WhatsApp Bot😏',
    K7: 'ඇයි why hello හ',
    K8: 'මොක what Hello🥲',
    K9: 'මොක what?',
    K10: 'ඇයි why please?❤️🫢',
    K11: '🌝❤️',
    K12: '😜hee hee😁hoo hoo' < br > ,
    K13:'හ hee hee💞',
    K14: '😊hoo...',
    K15:'why🥲',
    K16: '😂😂✌️',
    K17: '😐Ah',
    K18: 'the little one is😇',
    K19:'ඇයි why white❤ ️ 💓',
    K20: 'not at all😒',
    K21: '😁I don't know🥲',
    K22: 'well that is😌',
    K23:'but මර,
    K24: 'bags🙃',
    K25: '😘😇❤️',
    K26: 'මෙ here you have ඔයාට',
    K27: 'ඇත්ත really?❤️',
    K28: 'ඔය are you really❤ ️',
    K29:'why🙄',
    K30: 'does සි happen?',
    K31: 'එපා don't come here Green😒',
    K32: 'මේ please මේ go away💔',
    K33: 'you are the thief😒 you stole my heart😌',
    K34: 'මො what's humming බ owl',
    K35: 'මොක what's the Hello hum hum?',
    K36: 'no please nothing😐 🫠',
    K37: 'ආහ Ah',
    K38: 'yes, that's all😌',
    K39: '😐Hey hey aren't you?🫣',
    K40: '🙄what do you like?',
    K41: 'මා I like it too😊 💞',
    K42: 'El😌',
    K43:'just wait බැරි',
    K44: '😂😂💔',
    K45: 'why is it White?🙄',
    K46:'I haven't eaten yet අන',
    K47: 'don't drink😒',
    K48:'don't go to sleep😒 😌 ❤ ️',
    K49: 'I can't sleep අන please අන',
    K50:'මු nothing please අන',
    K51:'I don't know what🥲',
    K52:'I'm not doing anything, please බල I'm watching you😌',
    K53: 'පාල miss you please. Shall we play a game?😊✌️',
    K54: 'ආද love❤ ️',
    K55: 'ආද adalai so❤ ️ ❤ ️',
    K56: 'ඇත්ත true?',
    K57: 'අන please what is that?🥴',
    K58: 'දු I'm sorry about that too😕',
    K59: 'බෑ can't wait අන',
    K60: 'මොකද why are you crying?😒',
    K61: 'මොකද because come on😂',
    K62:'I don't know anything අහි',
    K63: 'හා and let's go😌',
    K64: 'බෑ can't give😒',
    K65: 'දෙන්න I'll give it to you later🥲',
    K66: 'නෑ not hungry❤ ️ 😒',
    K67: 'අ um huh huh හා',
    K68: 'ඇයි why the hell😉 😈',
    K69: 'ඇයි why Hui කෝ Kong is not in the tree😂',
    K70: 'ැ if you don't know, just wait😜',
    K71:'\we did the best we could \ \ N රෙ damn තමයි ' < BR > ,
    K72: 'ආ uh huh ගහ hit and see බලන්න',
    K73:'he😂 😂 😂 💓',
    K74: 'Vanderpool🥲 😂',
    K75: 'look at that🥴 😂',
    K76: '😌Ela',
    K77: 'මොක Moko do😉 ❣ ️',
    K78: 'adeh🙃 😹',
    K79: 'well, you're not saying that ලොකු',
    K80:'I'm just a kid😌',
    K81: 'ටික little?😂',
    K82: 'she is not බ',
    K83: 'මොක what did he do?',
    K84: 'එපා don't say that they sin😐 🤭',
    K85:'hmm ප sin so ප',
    K86: 'yesක until I said🙏 ❣ ️',
    K87:'I don't know🥲',
    K88: '  👀  ',
    K89: 'ගිහින් go get some medicine',
    K90: 'ගොඩක් too hard?☝️',
    K91: 'wanna eat a DSI road?😂',
    K92: 'take off your pants😒',
    K93: 'hand lept🥲',
    K94: 'හරි ok bad😒',
    K95: 'මම I'm not alone රට',
    K96: 'in the hand...🥲🥲🥲🥲🥲🥲',
    K97: 'can't put😐',
    K98: 'ගහ hit the pony on the charge and let the kid do the work😉',
    K99: 'ඇයි why? Uncomfortable?🤨😏💔',
    K100: 'my heart is broken ස',
    K101: '😹😹☝️',
    K102: 'dog cat mouse rabbit fox elephant😒',
    K103: '🥲urula Gati Hime',
    K104: 'බෑ can't say😒 why what?🙄',
    K105: '😐shall we run away?🤭🫢',
    K106: 'ගියා if you go, don't come back😒',
    K107: '😅✌️😝',
    K108: 'විහි it's not funny😌',
    K109: 'I'm angry😒 why?👎',
    K110: 'why Paco ඇයි',
    K111: 'Labb😒',
    K112: 'what the fuck?🙄',
    K113: 'පල run away පො',
    K114: '🥲💔🙏',
    K115: '🥲🥲💔☝️',
    K116: 'පා don't come with a woman🤨 💔 💔 💔',
    K117: 'not now baby ළම I'll give it to you later😝 😒',
    K118: 'what puck?😒',
    K119: '😒👎',
    K120: 'don't say that ප',
    K121: '🫢🙄',
    K122: 'please fuck you🙂 💔',
    K123: 'උ ukkamu😒 😂 😂',
    K124: 'why බල Are you looking?',
    K125: 'your two?😂',
    K126: 'yours?😂',
    K127: 'මං May I come and take it in my mouth?😒😝',
    K128: '😂 😂Hamo',
    K129:'ඉන්න if you want, just stay',
    K130: 'එපා don't just wait and wear a dress😂 ❤ ️',
    K131: '😂😂🙏',
    K132: '😂🤭',
    K133: '😁',
    K134: '😏☝️',
    K135:'don't cry then😒 😝',
    K136: 'පි bat',
    K137: '🙂',
    K138: '😌😌',
    K139: '🥲🥲💔',
    K140: '😍🥰😘💞💕💓💗💖❣️❤️',
    K141: '😐🙄',
    K142:'එපා don't worry then❤ ️',
    K143: '🥺🥺😐',
    K144: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
    K145: '🫡🫠🤝',
    K146: 'දහ a thousand flowers වික which grow😊 in this slow morning ප I wish you🙏 Good Morning...😃',
    K147:'the night that comes is haunted by dreams, waking up in the middle of the night, the processions coming under the bed, the Potters staring out the windows, a terrible nightවා'
    }






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
