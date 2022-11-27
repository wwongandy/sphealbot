console.log('Hello World');

const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./discord_config.json');

const { initializeApp } = require("firebase/app");
const firebaseConfig = require('./firebase_config.json');

// Connection to Discord Bot's initialization code

const discordClient = new Client({ intents: [GatewayIntentBits.Guilds] });

discordClient.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	discordClient.commands.set(command.data.name, command);
}

discordClient.once(Events.ClientReady, () => {
	console.log('Connected to Discord!');
});

discordClient.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = discordClient.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Initialize Discord
discordClient.login(token);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
