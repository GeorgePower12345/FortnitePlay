const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('')
        .setName('Fortnite')
        .setDetails('Battle Royale - In Lobby')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1140101823227773040/1203426684532162560/20240116_235556.jpg?ex=65d10d70&is=65be9870&hm=0255c05f35938368333fb2b7effb9a1e9e3fa258fba4e0d7287fed085124732f&')
        .setAssetsLargeText('APGR')
        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1140101823227773040/1203426730069590066/Battle_Pass_-_Icon_-_Fortnite_2.png?ex=65d10d7b&is=65be987b&hm=f88d09275631fa1ba33f77f99b91d55109f07b0fab297ab23002a7ffa0e2c7e7&')
        .setAssetsSmallText('APGR')
        

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












