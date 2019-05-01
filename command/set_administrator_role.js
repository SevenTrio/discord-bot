exports.run = async (client, message, args, level) => { 
  let role = message.mentions.roles.first();

  if(args[0]){
    if(!role) return message.channel.send("Упомяните роль.");

    client.con.query(`UPDATE servers SET administrators = "${role.id}" WHERE id = "${message.guild.id}"`, function (err) {
      if (err) throw err;
      client.administrators[message.guild.id] = role.id;
      message.channel.send(`Роль администратора успешно изменена на \`${role.name}\``);
    });
  } else {
    client.con.query(`UPDATE servers SET administrators = "null" WHERE id = "${message.guild.id}"`, function (err) {
      if (err) throw err;
      delete client.administrators[message.guild.id];
      message.channel.send(`Роль администратора успешно удаленa.`);
    });
  };
};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["administrator"],
  permLevel: "Administrator",
  category: "settings"
};
  
exports.help = {
  name: "set_administrator_role",
  category: "Команды для настройки",
  description: "Установка роли администратора",
  usage: "set_administrator_role @role",
  note: "Команду можно использовать без роли для её удаления."
};