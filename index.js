const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

// Makes the bot go online.
client.login(config.BOT_TOKEN);




const prefix = "!";

client.on("message", function(message){

  // Ignore the messages sent by other bots.
  if (message.author.bot) return;

  // Respond to messages that has the prefix at the beginning.
  if (!message.content.startsWith(prefix)) return;

  // Remove the prefix from the command and assign it as the "commandBody".
  const commandBody = message.content.slice(prefix.length);

  // Split the string into an array of sub-strings.
  const args = commandBody.split(' ');

  // Isolate the command name.
  const command = args.shift().toLowerCase();

  if (command === "ping"){
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
  else if (command === "sum"){
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  else if (command === "psi_personal_assistant"){
    message.reply("You can find psi here: https://github.com/brtymn/psi_personal_assistant");
  }
  else if (command === "thanks"){
    message.reply("You are welcome!")
  }
  else{
    message.reply("I don't understand.")
  }

});

client.login(config.BOT_TOKEN);
