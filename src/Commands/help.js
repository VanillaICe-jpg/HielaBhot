const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const fs = require("fs");
module.exports = new Command({
  name: "help",
  description: "shows an interactive embed of commands that people can use",
  permission: "SEND_MESSAGES",

  async run(message, args, client) {
    let comms = [];
    fs.readdirSync("./src/Commands")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Command}
         */
        const command = require(`../Commands/${file}`);
        if (command.parameters == undefined) {
          comms.push(`+${command.name}: ${command.description}! \n`);
        } else {
          comms.push(
            `+${command.name} ${command.parameters}: ${command.description}! \n`
          );
        }
      });
    message.channel.send(comms.toString("").replace(/,/g, "\n"));
  },
});
