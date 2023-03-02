const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

//Crreate new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// when client is ready, run this code once
client.once(Events.ClientReady, c => {
    console.log(`Ready and logged in as ${c.user.tag}`);
});

// Log in to discord with token
client.login(token);