const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdpointend')
		.setDescription(`Ends the point system and tallies up all participants' points.`),
	async execute(interaction) {
		return interaction.reply({ content: `Point tallies:`, ephemeral: true });
	},
};
