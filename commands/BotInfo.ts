import { Client, Command, Embed, Message } from "../lib/assistant/mod.ts";

export default class BotInfo extends Command {
	public constructor() {
		super('BotInfoCommand', 'botinfo', 'Gets the bot version information.');
		this.aliases = [
			'binfo',
			'bot-info'
		];
	}

	public async onRun(bot: Client, msg: Message, args: string[]): Promise<void> {
		const embed = new Embed()
			.setColor('#0acc5b')
			.addField('Our Github', "[JSPrismarine](https://github.com/JSPrismarine)", true)
			.addField('Library', '[Assistant v3](https://github.com/Bavfalcon9/Assistant/tree/deno)', true)
			.addField('Runtime', 'Deno v' + Deno.version.deno, true)
			.addField('Bot Repository', "[Github](https://github.com/JSPrismarine/Discord-Bot)", true);
		msg.channel.send(embed);
	}
}