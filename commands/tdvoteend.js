const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tvoteend')
		.setDescription('Ends the voting system and unregisters participant with highest votes.'),
	async execute(interaction) {
		return interaction.reply({ content: `Participant voted off:`, ephemeral: true });
	},
};
