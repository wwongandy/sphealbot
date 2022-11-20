const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdvoteexpose')
		.setDescription('Exposes the historic votes for a participant.')
		.addUserOption(option => option.setName('sphealer').setDescription('The Sphealer to expose').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('sphealer');
		return interaction.reply({ content: `You wanted to expose: ${member.user.username}`, ephemeral: true });
	},
};
