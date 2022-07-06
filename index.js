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
let joke = ""

fetch('https://dad-jokes.p.rapidapi.com/random/joke/png', options)
    .then(response => response.json())
    .then(response => {
        joke = `${response.body.setup} ${response.body.punchline}`
        return joke
    })
    .catch(err => console.error(err));








const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log("DadBot Online")
    console.log(joke)

    /* const guildID = '994064353026396193'
    const guild = client.guilds.cache.get(guildID)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.applications.commands
    }

    commands.create({

    }) */
})













client.login(token)