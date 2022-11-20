const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tdvotedmessage')
		.setDescription('Set the message other participants receive when you get voted by them.')
		.addStringOption(option => option.setName('message').setDescription('The message to send').setRequired(true)),
	async execute(interaction) {
        const message = interaction.options.getString('message') || '';
		return interaction.reply({ content: `You will send the following message when you get voted off: ${message}`, ephemeral: true });
	},
};
