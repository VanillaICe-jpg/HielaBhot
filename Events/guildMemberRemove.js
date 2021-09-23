const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("guildMemberRemove", (client, member) => {
  const channel = member.guild.channels.cache.find(
    (c) => c.name == "welcome-and-more"
  );
  if (!channel) return;

  const embed = new Discord.MessageEmbed();

  embed
    .setTitle(`Goodbye ${member.user.tag} :(`)
    .setColor("DARK_RED")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .addField("User joined", member.joinedAt.toUTCString())
    .setTimestamp();

  channel.send({ embeds: [embed] });
});
