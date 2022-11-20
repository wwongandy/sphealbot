const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdvote')
		.setDescription('Allows a participant to vote someone out.')
		.addUserOption(option => option.setName('participant').setDescription('The participant to vote out').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('participant');
		return interaction.reply({ content: `You wanted to vote out: ${member.user.username}`, ephemeral: true });
	},
};
