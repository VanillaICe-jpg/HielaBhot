const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
  name: "intro",
  description: "Shows an introduction embed of the bot",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const embed = new Discord.MessageEmbed();

    embed
      .setTitle("This is Title embed")
      .setURL("https://github.com/VanillaICe-jpg/HielaBhot")
      .setAuthor(
        //you can use message.author.XXXX to print who send the message
        client.user.username,
        client.user.avatarURL({ dynamic: true }),
        "https://github.com/VanillaICe-jpg/HielaBhot"
      )
      .setDescription(
        "This is explaining stuff, \nhere is a link of the repository : [github](https://github.com/VanillaICe-jpg/HielaBhot)"
      )
      .setColor("RANDOM")
      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setTimestamp(message.createdTimestamp)
      //.setImage(link of the image);
      .addField("Bot Version", "1.0.0", true)
      .addFields(
        {
          name: "Bot Name",
          value: client.user.username,
          inline: true,
        },
        {
          name: "Developer(s)",
          value: "Israel Cm",
          value: "aka. ICe / Hielito",
          inline: true,
        }
      );

    message.reply({ embeds: [embed] });
  },
});
