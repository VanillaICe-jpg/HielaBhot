const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("guildMemberAdd", (client, member) => {
  const channel = member.guild.channels.cache.find(
    (c) => c.name == "welcome-and-more"
  );
  if (!channel) return;

  const embed = new Discord.MessageEmbed();

  embed
    .setTitle(`Welcome @${member.user.tag}`)
    .setColor("RANDOM")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL({ dynamic: true }))
    .addField("User joined", member.joinedAt.toUTCString());

  channel.send({ embeds: [embed] });
});
