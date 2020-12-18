import { Client, Command, Message } from "../lib/assistant/mod.ts";

export default class Ping extends Command {
	public constructor() {
		 super('PingCommand', 'ping', 'Gets the response time from the bot to discord');
	}

	public async onRun(bot: Client, msg: Message): Promise<void> {
		 const m: Message = await msg.reply("Pinging...");
		 m.edit(`Pong \`${Date.now() - m.createdAt}\` ms!`);
	}
}