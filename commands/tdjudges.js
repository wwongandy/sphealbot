const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdjudges')
		.setDescription('Gets all judges.'),
	async execute(interaction) {
		return interaction.reply({ content: `All judges:`, ephemeral: true });
	},
};
