const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdseal')
		.setDescription('Get a random Oh Seal.'),
	async execute(interaction) {
		return interaction.reply({ content: `Your random Oh Seal:`, ephemeral: true });
	},
};
