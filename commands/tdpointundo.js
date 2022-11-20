const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdpointundo')
		.setDescription('Undos your previous tdpoint.'),
	async execute(interaction) {
		return interaction.reply({ content: `You undoed giving X to:`, ephemeral: true });
	},
};
