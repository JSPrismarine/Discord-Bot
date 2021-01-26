import { Client, Command, Message } from "https://raw.githubusercontent.com/Assistant-Bot/Lib/24b6d0ab57be18739adc1cfc593886ebe466a4e9/mod.ts";

export default class Ping extends Command {
	public constructor() {
		super('PingCommand', 'ping', 'Gets the response time from the bot to discord');
	}

	public async onRun(bot: Client, msg: Message): Promise<void> {
		let before = Date.now();
		const m: Message = await msg.reply("Pinging...");
		m.edit(`Pong \`${Date.now() - before}\` ms!`);
	}
}