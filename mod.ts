import Ping from "./commands/Ping.ts";
import { Client, CommandHandler, Module } from 'https://raw.githubusercontent.com/Assistant-Bot/Lib/24b6d0ab57be18739adc1cfc593886ebe466a4e9/mod.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";
import Packet from "./commands/Packet.ts";
import BotInfo from "./commands/BotInfo.ts";

const bot: Client = new Client();
const handler = new CommandHandler(bot, { prefix: "!" });

handler.registerModule(new Module('default', [
	new Ping,
	new Packet,
	new BotInfo
]));
handler.start();

bot.on('ready', () => {
	console.log("Bot connected with valid session id");
});
bot.connect(config().DISCORD_TOKEN ?? prompt("Token:") ?? "");