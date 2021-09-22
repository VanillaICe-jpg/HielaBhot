const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "say",
  description: "Makes the bot says what you want!",
  permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const msg = await message.channel.send(args.slice(1).join(" "));
    message.delete(1000);
  },
});
