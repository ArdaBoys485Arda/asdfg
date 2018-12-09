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
    .setDescription('Bot sürümü: v1.0.0 Yapımcı: Arda İZ \n\n Atatürk Resmini Linkten Alabilirsiniz\n\n https://abload.de/img/mustafa-kemal-atatrk-ibl3o.jpg \n\n Görseller Telif Hakkına Tabi Olabilir\n\n:copyright: 2018 TBT BOT');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Atatürk Resmi Gönderir',
  usage: 'atatürk'
};
