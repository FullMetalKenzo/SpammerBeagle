/*
Install Node.js and Discord.js@12.5.3
Copyright 2022 @ALONE
Youtube- https://youtube.com/alonearif [tutorials available]
Discord- https://dsc.gg/alonearif
*/

const Discord = require('discord.js')
const client = new Discord.Client() 

 
let spambed = new Discord.MessageEmbed() //The embed
.setDescription('Ash Catch-Em-All') //replace

let spammsg = "Ash Catch-Em-All"  //replace the message

//--------------specific amount spam--------------------

client.on('message', async message => {

if(message.author.bot) return; //ignoring bots for this event!

  if(message.content.toLowerCase().startsWith('on?')) { //check if on or not.
    message.channel.send('poketwo-spam')
  }

  if(message.content.toLowerCase().startsWith('spam')) {

   for (let i = 0; i < 100; i++) { //the 5 is the number of spaming time, replace with any as you like. 


     message.channel.send(spammsg) // send message
     message.channel.send(spambed) // send embed


};
  };


})


//-----------infinite spam--------------------

//to ping user use their ID like <@!ID> //e.g: <@!741639648744570972>
let imsg = "any" //the message the bot would spam infinity times!

client.on('message', async message => {
  if(message.content.toLowerCase().startsWith(imsg)) {
    message.channel.send(imsg) //sending the same message and it would loop this.
  }
})

//Define token in secrets tab
const token = process.env['token']
client.login(token)