const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdunparticipant')
		.setDescription('Unregister someone as a participant.')
		.addUserOption(option => option.setName('sphealer').setDescription('The Sphealer to unregister').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('sphealer');
		return interaction.reply({ content: `You wanted to unregister: ${member.user.username}`, ephemeral: true });
	},
};
