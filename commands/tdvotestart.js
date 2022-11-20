const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdvotestart')
		.setDescription('Starts the voting system.'),
	async execute(interaction) {
		return interaction.reply({ content: `Voting system started`, ephemeral: true });
	},
};
