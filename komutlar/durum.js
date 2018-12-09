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
    .setDescription('Bot sürümü: v1.0.0 Yapımcı: Arda İZ \n\n Son Yapılan Güncellemeler: \n\n Yeni Komut Eklendi tbt!reklamlar \n\n Yeni Komut Eklendi tbt!özelgünler\n\n https://tr-discordbotlar.cf/ \n\n:copyright: 2018 TBT BOT');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sondurum'],
  permLevel: 0
};

exports.help = {
  name: 'sondurum',
  description: 'Son Güncellemeyi Gösterir',
  usage: 'sondurum'
};