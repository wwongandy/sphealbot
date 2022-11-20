const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdpointstart')
		.setDescription('Starts the points system.'),
	async execute(interaction) {
		return interaction.reply({ content: `Points system started`, ephemeral: true });
	},
};
