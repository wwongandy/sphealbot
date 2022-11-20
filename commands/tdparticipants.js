const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdparticipants')
		.setDescription('Gets all participants.'),
	async execute(interaction) {
		return interaction.reply({ content: `All participants:`, ephemeral: true });
	},
};
