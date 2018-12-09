const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Sana TBT hava yolu ile yolladım :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü: v1.0.0 Yapımcı: Arda İZ \n\n Sa :Aleyküm Selam olarak cevap verir \n\n tbt!yapımcı :Botun yapımcısını Gösterir \n\n tbt!id :İdni gönderir\n\n:copyright: 2018 TBT BOT');
    return message.author.sendEmbed(pingozel).catch(e => { message.channel.send("Özelin Kapalı Qarşm")})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekstrayardım'],
  permLevel: 0
};

exports.help = {
  name: 'ekstrayardım',
  description: 'Yardım Menüsünde Olmayan Komutları Gösterir',
  usage: 'ekstrayardım'
};
