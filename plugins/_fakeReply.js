
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/VCw50mD/08a2bd3f6974c12f.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/VQ05SWb/f188fefb6f97a756.jpg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://i.ibb.co/VCw50mD/08a2bd3f6974c12f.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/VQ05SWb/f188fefb6f97a756.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'INSTAGRAM', body: 'Keep bot alive', thumbnailUrl: 'https://i.ibb.co/VCw50mD/08a2bd3f6974c12f.jpg', sourceUrl: 'https://instagram.com/_mbuvi' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/VQ05SWb/f188fefb6f97a756.jpg', mediaType: 'VIDEO', description: 'SUBSCRIBE : YT CHANNEL', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://i.ibb.co/VCw50mD/08a2bd3f6974c12f.jpg', sourceUrl: 'https://youtube.com/rhodvick' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/VQ05SWb/f188fefb6f97a756.jpg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'FOLLOW CHANNEL', body: '© GlobalTechInfo', thumbnailUrl: 'https://i.ibb.co/VCw50mD/08a2bd3f6974c12f.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' }}}
    
} 
export default handler
