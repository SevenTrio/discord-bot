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
  guildOnly: false,
  aliases: ["пинг"],
  permLevel: "User"
};
  
exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "Это как... Пинг. Потом Понг. Но это не Пинг Понг.",
  usage: "ping"
};