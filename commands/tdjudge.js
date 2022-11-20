const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdjudge')
		.setDescription('Register someone as a judge.')
		.addUserOption(option => option.setName('sphealer').setDescription('The Sphealer to register as a judge.').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('sphealer');
		return interaction.reply({ content: `You wanted to register: ${member.user.username}`, ephemeral: true });
	},
};
