const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "clear",
  description:
    "clear the amount of messages that you want ,(note: It only deletes messages of 14 day olds max)",
  parameters: "<number_of_messages>",
  permission: "MANAGE_MESSAGES",
  async run(message, args, client) {
    const amount = args[1];

    if (!amount || isNaN(amount))
      return message.reply(
        `${amount == undefined ? "Nothing" : amount} is not a valid number!`
      );

    const amountParsed = parseInt(amount);

    if (amountParsed > 100)
      return message.reply(`you cannot clear more than 100 messages!`);

    message.channel.bulkDelete(amountParsed, true);

    const msg = await message.channel.send(`Cleared ${amountParsed} messages!`);

    setTimeout(() => msg.delete(), 2000);
  },
});
