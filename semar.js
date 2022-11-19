const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 2 OKTOBER 2022
    // FITUR HOST

case 'menucreate' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu2 =`  =====DAFTAR CREATE AKUN=====
        
==MENU CREATE CPANEL==
${prefix}createcp1 (Membuat Akun cPanel Mini)
${prefix}createcp2 (membuat Akun cPanel Medium)
${prefix}createcp3 (membuat Akun cPanel Extra)

==MENU CREATE WHM==
${prefix}createwhm1 (Membuat Akun Whm Mini)
${prefix}createwhm2 (membuat Akun Whm Medium)
${prefix}createwhm3 (membuat Akun Whm Extra)

==MENU CREATE MWHM==
${prefix}createmwhm1 (membuat Akun Mwhm Mini)
${prefix}createmwhm2 (membuat Akun Mwhm Medium)
${prefix}createmwhm3 (membuat Akun Mwhm Extra)

==MENU CREATE ADHOST==
${prefix}createadhost (membuat Akun Admin) (Khusus Owner)

==MENU CREATE CEO==
${prefix}createceo (membuat Akun Ceo) (Khusus Owner)

*CARA BUAT AKUN*
Ketik .createwhm1 username | password
contoh : .createwhm1 cristian | @@server@@

=======BOT HOSTING=======`
reply(menu2)

        }else{
            reply("KONTOL MINIMAL SEWA GUA !!!")
        }
        break

case 'menu' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu3=`ketik .menubot untuk lihat fitur yang ada`
reply(menu3)

        }else{
            reply("KONTOL MINIMAL SEWA GUA !!!")
        }
        break

    case 'menubot' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menubot =`  =====MENU BOT=====

---------------------------------------------
${prefix}carabuatwebp
---------------------------------------------
${prefix}webp 1/2/3/4/5/6/7

©farelhosting`
reply(menubot)

        }else{
            reply("KONTOL MINIMAL NYEWA GUA !!!")
        }
        break
      
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | xnxx.com
             
jika ingin update username server ketik *${prefix}${command}* username | rndytech
             
jika ingin update password server ketik *${prefix}${command}* password | @@##rndytech##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024065162195@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info)
                }
                
            }
            
            break
            
            case 'infobot' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
            id = msg.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info);
            
            break
            
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'cekidgrup':
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await semar.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:msg})

            break 
            
// CASE CREATE CPANEL //
case 'createcp1' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        domain = parse[0]
        user = parse[1]
        pass = "@@server" +makeid(5) + "@@"
        pkg = "cPanel Mini"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createcp1 domain | username | password")
    // console.log(parse)
}
        break
case 'createcp2' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        domain = parse[0]
        user = parse[1]
        pass = parse[3]
        pkg = "cPanel Medium"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createcp2 domain | username | password")
    // console.log(parse)
}
        break
case 'createcp3' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = "@@server" + makeid(5) + "@@"
        domain = parse[1]
        pkg = "cPanel Extra"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createcp3 username | domain")
    
    // console.log(parse)
}
        break

// CASE CREATE WHM //

case 'createwhm1' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Whm Mini"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm1 username | password")
    // console.log(parse)
}
        break
case 'createwhm2' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Whm Medium"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm2 username | password")
    // console.log(parse)
}
        break
case 'createwhm3' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Whm Extra"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm3 username | password")
    
    // console.log(parse)
}
        break

// CASE CREATE MWHM //
case 'createmwhm1' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Mwhm Mini"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createmwhm1 username | password")
    // console.log(parse)
}
        break
case 'createmwhm2' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Mwhm Medium"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createmwhm2 username | password")
    // console.log(parse)
}
        break
case 'createwhm3' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Mwhm Extra"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createmwhm3 username | password")
    
    // console.log(parse)
}
        break

// CASE CREATE ADHOST //
case 'createadhost' :
    reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Admin"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm1 username | password")
    // console.log(parse)
}
        break

// CASE CREATE CEO //
case 'createceo' :
    reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Ceo"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createceo username | password")
    // console.log(parse)
}
        break

// CEK SMTP SERVER //
case 'ceksmtp' :
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
    var inputt = {
        
        server: host,
        uroot: uroot,
              proot: proot,
          }
          
          request.post({
              url: 'https://yogax.my.id/smtp.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
 
        break

case 'cekdefault' :
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
 
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
 var inputt = {
     
              server: host,
              uroot: uroot,
              proot: proot,
            }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/cekdefault.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
        break
        case 'termintdefault' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termintdefault.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
        case 'cekuser' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/cekuser.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
        case 'termintakun' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termint.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
            case 'addpack' :
                if(args != ""){
                parse = dn.split(" | ")
                    user = parse[0]
                    pkg = parse[1]
 host = server[0].url
 uroot = server[0].username
 proot = server[0].password
 var inputt = {

     server: host,
              uroot: uroot,
              proot: proot,
              user: user,
              pkg: pkg,
          }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/addpack.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
}else{
    reply("ketik .addpack username | package")
}
        break
//CASE HOST


case 'carabuatwebp' :
    menuweb = `CARA MEMBUAT WEB PHISING 


webp1: Mediafire
webp2: freefire Spin
webp3: Group Wa
webp4: Youtube
webp5: Simontok
webp6: Mobile Legend
webp7: Codashop
    
Ketik: webp1
Untuk web Mediafire

©farelhosting`
reply(menuweb)
break
                  case 'webp1' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "wold.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://cishop.my.to/cishop/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire",
                    path: pathh,
                }

                request.post({
                    url: 'https://cishop.my.to/cishop/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web Mediafire\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

case 'webp2' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://cishop.my.to/cishop/freefire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "freefire",
                    path: pathh,
                }

                request.post({
                    url: 'https://cishop.my.to/cishop/freefire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web FreeFire Spin\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
	reply("ini grup siapa bangsat")
	}
break

case 'webp3' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwa" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://cishop.my.to/cishop/grupwa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "grupwa",
                    path: pathh,
                }

                request.post({
                    url: 'https://cishop.my.to/cishop/grupwa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web grupwa\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'webp4' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "youtube" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://cishop.my.to/cishop/youtube/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "youtube",
                    path: pathh,
                }

                request.post({
                    url: 'https://cishop.my.to/cishop/youtube/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web Youtube\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    kirimprib.reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'webp5' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "simontok" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://cishop.my.to/cishop/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "simontok",
                    path: pathh,
                }

                request.post({
                    url: 'https://cishop.my.to/cishop/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web Simontok V1\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'webp6' :
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mobile-legend" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://cishop.my.to/cishop/mobile-legend/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://cishop.my.to/cishop/mobile-legend/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web Mobile Legend\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'webp7' :
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashop" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://cishop.my.to/cishop/codashop/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "coda",
                    path: pathh,
                }

                request.post({
                    url: 'https://cishop.my.to/cishop/codashop/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web Codashop\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/host.php\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'web8' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "youtube" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/youtube/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "youtube",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/youtube/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web Youtube\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/${pathh}\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
    }else{
            reply("ini grup apa bangsat!")
        }
break

case 'web9' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire-event" + makeid(7) + "." + "event-terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("sedang membuat... tunggu ± 1 menit")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://yogax.my.id/apiku/freefire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "freefire",
                    path: pathh,
                }

                request.post({
                    url: 'https://yogax.my.id/apiku/freefire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_*BERHASIL!*, Data Telah di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_")
                    }


                    hasillrndy = `- Web Free Fire Spin\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/${pathh}\n==========================\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break


   
            // 2 OKTOBER 2022








case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await semar.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await semar.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}