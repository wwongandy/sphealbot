const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdunjudge')
		.setDescription('Unregister someone as a judge.')
		.addUserOption(option => option.setName('sphealer').setDescription('The Sphealer to unregister as a judge').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('sphealer');
		return interaction.reply({ content: `You wanted to unregister: ${member.user.username}`, ephemeral: true });
	},
};
