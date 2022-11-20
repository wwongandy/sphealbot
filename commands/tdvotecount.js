const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdvotecount')
		.setDescription('Sends administrator the vote counts.'),
	async execute(interaction) {
		return interaction.reply({ content: `Vote counts:`, ephemeral: true });
	},
};
