import Ping from "./commands/Ping.ts";
import { Client, CommandHandler, Module } from './lib/assistant/mod.ts';

const bot: Client = new Client();
const handler = new CommandHandler(bot, { prefix: "!" });

handler.registerModule(new Module('default', [
	new Ping
]));

handler.start();

bot.connect(prompt('Token:') ?? "");

bot.on('ready', () => {
	console.log("Bot connected with valid session id");
});