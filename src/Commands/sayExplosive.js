const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "sayE",
  description:
    "Makes the bot says what you want!\n(and it'll be deleted after your amount of time in seconds)",
  parameters: "<Time_in_seconds> <text to send>",
  permission: "SEND_MESSAGES",

  async run(message, args, client) {
    const amount = args[1];

    if (!amount || isNaN(amount))
      return message.reply(
        `${amount == undefined ? "Nothing" : amount} is not a valid number!`
      );

    const amountParsed = parseInt(amount);

    const msg = await message.channel.send(args.slice(1).join(" "));
    setTimeout(() => msg.delete(), amountParsed * 1000);
    message.delete(1000);
  },
});
