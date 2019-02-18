exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let text = args.join(" ").slice(args[0].length+1);
  let member = message.mentions.members.first();
  
  message.delete().catch(O_o => {});

  if (!member){
    return message.channel.send({embed:{color: 0xFF0000, description: "**ERROR**"}});
  } else {
    member.send(text)
  }
};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["лс"],
  permLevel: "Bot Admin"
};
  
exports.help = {
  name: "dm",
  category: "Miscelaneous",
  description: "Отправляет сообщение от бота указаному пользователю.",
  usage: "dm <@user> сообщение"
};