exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! Задержка - \`${msg.createdTimestamp - message.createdTimestamp}ms\`. API задержка - \`${Math.round(client.ping)}ms\``);
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