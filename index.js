const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { key } = require('./config.json')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
};



let joke = ''
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log("DadBot Online")
    //console.log(joke)
    console.log(client.user.tag)



})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'joke') {
        await fetch('https://dad-jokes.p.rapidapi.com/random/joke/png', options)
            .then(response => response.json())
            .then(response => {
                joke = `${response.body.setup} ${response.body.punchline}`
                return joke
            })
            .catch(err => console.error(err));

        await interaction.reply(joke);
    }
});



client.login(token)

