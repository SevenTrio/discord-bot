const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  let vl = '';
  switch (message.guild.verificationLevel) {
    case 0:
      vl = 'Нету';
      break;
    case 1:
      vl = 'Низкий';
      break;
    case 2:
      vl = 'Средний';
      break;
    case 3:
      vl = 'Высокий';
      break;
    case 4:
      vl = 'Очень высокий';
    break;
  }
           
  let embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription("ID:"+message.guild.id)
  .setColor(0x00AE86)
  .setThumbnail(message.guild.iconURL)
  .setTimestamp()
  .addField("Уровень проверки", vl, true)
  .addField("Регион", message.guild.region, true)
  .addField("Участники",'Всего:      `'+message.guild.memberCount+'`\nОнлайн:  `'+message.guild.members.filter(m => m.presence.status !== 'offline').size+'`', true)
  .addField(`Каналы [${message.guild.channels.size}]`,'Текстовых:  `'+message.guild.channels.filter(guildchannel => {if(guildchannel.type == "text") return guildchannel}).size+'`\nГолосовых:  `'+message.guild.channels.filter(guildchannel => {if(guildchannel.type == "voice") return guildchannel}).size+'`', true )
  .addBlankField(true)
  .addField("Создатель:", message.guild.owner.user.username +'#'+message.guild.owner.user.discriminator+' ('+message.guild.owner.id+')')
  .addField("Дата создания:", message.guild.createdAt)
  .addField("Роли:", '`'+message.guild.roles.size+' шт`')

  message.channel.send(embed);
};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["server", "серверинфо", "сервер"],
  permLevel: "User"
};
  
exports.help = {
  name: "serverinfo",
  category: "Miscelaneous",
  description: "Вся информация о данном сервере",
  usage: "serverinfo"
};