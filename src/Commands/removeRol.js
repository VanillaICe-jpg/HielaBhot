const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "removeRol",
  description: "removes a User the rol that you want",
  permission: "MANAGE_ROLES",

  async run(message, args, client) {
    const targetUser = message.mentions.users.first();
    if (!targetUser) {
      message.reply("Please specify someone to remove a rol to.");
      return;
    }

    args.shift();
    const roleName = args[1];
    const { guild } = message;

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName;
    });
    if (!role) {
      message.reply(`There's no role with that name "${roleName} "`);
      return;
    }

    const member = guild.members.cache.get(targetUser.id);

    if (member.roles.cache.get(role.id)) {
      member.roles.remove(role);

      message.reply(`Ready, now ${args[0]} no longer has "${roleName}" role`);
    } else {
      message.reply(`but ${args[0]} don't have "${roleName}" role`);
    }
  },
});
