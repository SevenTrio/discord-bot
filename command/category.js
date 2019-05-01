exports.run = async (client, message, args, level) => {
  let category = {
    "автороли" : "autorole",
    "персональные_роли" : "personrole",
    "развлечения" : "fun",
    "разное" : "miscelaneous",
    "системные" : "system",
  };

  if (!category[args[0]]) {
    message.channel.send("Выберите категорию которую хотите включить или отключить на данном сервере.\n`автороли`, `персональные_роли`, `развлечения`, `разное`, `системные`");
  } else {
    if (client.servers[message.guild.id][category[args[0]]]) {
      client.servers[message.guild.id][category[args[0]]] = 0;
      message.channel.send(`Категория ${args[0]} успешно выключена на данном сервере.`);

      client.con.query(`UPDATE servers SET ${category[args[0]]} = 0 WHERE id = "${message.guild.id}"`, function (err) {
        if (err) throw err;
        client.con.query(`CREATE TABLE IF NOT EXISTS roles_${message.guild.id} (num INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), id CHAR(18), cat TINYINT UNSIGNED)`, function (err, result) {
          if (err) throw err;
        });
      });
      
    } else {
      client.servers[message.guild.id][category[args[0]]] = 1;
      message.channel.send(`Категория ${args[0]} успешно включена на данном сервере.`);

      client.con.query(`UPDATE servers SET ${category[args[0]]} = 1 WHERE id = "${message.guild.id}"`, function (err) {
        if (err) throw err;
      });

    }
  }
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["категория"],
  permLevel: "Administrator",
  category: "settings"
};
  
exports.help = {
  name: "category",
  category: "Команды для настройки",
  description: "Включает или отключает категорию на данном сервере.",
  usage: "category <название категории>"
};