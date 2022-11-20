const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdhelp')
		.setDescription('Get an overview of how Total Drama Island works.'),
	async execute(interaction) {
		return interaction.reply({ content: `foo bar`, ephemeral: true });
	},
};
