const Command = require("../Structures/Command.js");

const Discord = require("discord.js");
const package = require("../Data/package.json");
module.exports = new Command({
  name: "intro",
  description: "Let me introduce myself; HielaBhot! ",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const embed = new Discord.MessageEmbed();

    embed
      .setTitle("Nice to meet you! I'm HielaBhot")
      .setURL("https://github.com/VanillaICe-jpg/HielaBhot")
      /*.setAuthor(
        you can use message.author.XXXX to print who send the message
        client.user.username,
        client.user.avatarURL({ dynamic: true }),
        "https://github.com/VanillaICe-jpg/HielaBhot"
      )*/
      .setDescription(
        "I'm glad to be here, I'm like an administration bot, \nBe aware! I want to put a lot of funny stuff in my commands. \n\nIf you wanna see my progress, here is a link of the repository\n[github](https://github.com/VanillaICe-jpg/HielaBhot)\n"
      )
      .setColor("RANDOM")
      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setTimestamp(message.createdTimestamp)
      //.setImage(link of the image);
      .addField(`Bot Version`, package.version, true)
      .addFields(
        {
          name: "Bot Name",
          value: client.user.username,
          inline: true,
        },
        {
          name: "Developer(s)",
          value: "Israel Cruz M.\nAKA. ICe / Hielito",
          inline: true,
        }
      );

    message.reply({ embeds: [embed] });
  },
});
