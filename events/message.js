module.exports = async (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // If the member on a guild is invisible or not cached, fetch them.
  if (message.guild && !message.member) await message.guild.fetchMember(message.author);
  
  // Get the user or member's permission level from the elevation
  const level = client.permlevel(message);

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;
  
  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");


  if (level < client.levelCache[cmd.conf.permLevel]) {
    return message.channel.send(`You do not have permission to use this command.
    Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
    This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`); 
  }
    
  // Run the command
  cmd.run(client, message, args, level);
};