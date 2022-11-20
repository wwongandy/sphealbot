const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdparticipant')
		.setDescription('Register someone as a participant.')
		.addUserOption(option => option.setName('sphealer').setDescription('The Sphealer to register').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('sphealer');
		return interaction.reply({ content: `You wanted to register: ${member.user.username}`, ephemeral: true });
	},
};
