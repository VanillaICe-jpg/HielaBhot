const Command = require("../Structures/Command.js");

module.exports = new Command({
  name: "giveRol",
  description: "gives a User the rol that you want",
  parameters: "<@user_to_rol> <roleName>",
  permission: "MANAGE_ROLES",

  async run(message, args, client) {
    const targetUser = message.mentions.users.first();
    if (!targetUser) {
      message.reply("Please specify someone to give a rol to.");
      return;
    }

    //+giveRol @member hi
    //['member', 'hi']

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
      message.reply(`${args[0]} already has "${roleName}" role`);
    } else {
      member.roles.add(role);

      message.reply(`Ready, now ${args[0]} has "${roleName}" role`);
    }
  },
});
