exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["скажи"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "say",
    category: "Miscelaneous",
    description: "Сообщение от бота.",
    usage: "say"
  };