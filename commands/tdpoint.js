const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdpoint')
		.setDescription('Gives a person X points.')
		.addUserOption(option => option.setName('sphealer').setDescription('The Sphealer to give points to').setRequired(true))
        .addIntegerOption(option => option.setName('points').setDescription('The amount of points to give').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('sphealer');
        const points = interaction.options.getInteger('points') ?? 0;
		return interaction.reply({ content: `You wanted to give ${points} points to: ${member.user.username}`, ephemeral: true });
	},
};
