const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdpointtally')
		.setDescription(`Tallies up all of the participants' points.`),
	async execute(interaction) {
		return interaction.reply({ content: `Point tallies:`, ephemeral: true });
	},
};
