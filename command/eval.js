exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const code = args.join(" ");
  try {
    const evaled = eval(code);
    const clean = await client.clean(client, evaled);
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Owner",
  category: "systems"
};

exports.help = {
  name: "eval",
  category: "Системные",
  description: "Evaluates arbitrary javascript.",
  usage: "eval [...code]"
};