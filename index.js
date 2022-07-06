const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '74a7863eeemsh7769330fc331b88p1eab73jsnd9c279c69637',
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

client.once('ready', () => {
    console.log("DadBot Online")
    console.log(joke)
})










client.login(token)