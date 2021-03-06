const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const fortniteRole = message.guild.roles.cache.get("778974539048419359");
  const fortniteEmoji = message.guild.emojis.cache.get("791701729929461770");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription("Cliquez sur la réaction ci-dessous pour obtenir le rôle")
    .setColor("#dc143c")
    .addField(
      "Les rôles disponible:",
      `
      ${fortniteEmoji} - ${fortniteRole.toString()}
      `
    );

    client.channels.cache.get('779443908647714819').send(embed).then(async msg => {
      await msg.react(fortniteEmoji);
    })
};

module.exports.help = {
  name: "allroles",
  aliases: ['allroles'],
  category: 'reactions',
  description: "Renvoie un message avec des réactions!",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false
};