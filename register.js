const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { id } = require('./config.json')
const { token } = require('./config.json');

const commands = [
    {
        name: 'joke',
        description: 'Tells jokes that are not funny',
    }

];
const clientId = '994059250957565972';
const guildId = '994064353026396193';



const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
