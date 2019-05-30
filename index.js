const fs = require('fs');

require('dotenv').config(); //load in hidden data from .env

const Discord = require('discord.js'); //discord api
const client = new Discord.Client();

 //read all from events
fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
        const eventHandler = require(`./events/${file}`)
        const eventName = file.split('.')[0]
        client.on(eventName, (...args) => eventHandler(client, ...args))
})
})


client.login(process.env.BOT_TOKEN);

require('http').createServer().listen();
