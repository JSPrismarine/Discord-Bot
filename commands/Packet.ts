import { Client, Command, Embed, Message } from "../lib/assistant/mod.ts";
import Identifiers from "https://raw.githubusercontent.com/JSPrismarine/JSPrismarine/040d3efcd1140604264cedc1f2a4d51acace5b37/src/network/Identifiers.ts";

export default class Packet extends Command {
	public constructor() {
		super('PacketCommand', 'packet', 'Gets the packet name from the specified packet ID, or packet ID from packet name.');
	}

	public async onRun(bot: Client, msg: Message, args: string[]): Promise<void> {
		const type: string = args.slice(0).join('');

		if (parseInt(type)) {
			const keys: string[] = Object.keys(Identifiers);
			for (let key of keys) {
				const val = (Identifiers as any)[key];
				if (val === parseInt(type)) {
					msg.channel.send(this.buildEmbed(msg.guild?.icon ?? "", key, val));
					return;
				}
			}
			msg.channel.send(`Could not find any packet with the id of: \`0x${parseInt(type).toString(16)}\``);
			return;
		} else {
			const keys: string[] = Object.keys(Identifiers);
			const found: string | boolean = keys.find(f => f.toLowerCase().search(type) !== -1) || false;
			if (found !== false && type.length > 0) {
				const val = (Identifiers as any)[found as string];
				msg.channel.send(this.buildEmbed(msg.guild?.icon ?? "", found, val));
			} else {
				msg.channel.send(`Could not find any packet with the name of: \`${type.split('`').join('\\`')}\``);
			}
		}
	}

	private buildEmbed(icon: string, name: string, id: number): Embed {
		return new Embed()
			.setColor('#0acc5b')
			.setAuthor('Version: ' + Identifiers.MinecraftVersion)
			.addField('Packet Name', name, false)
			.addField('Packet ID', `0x${id.toString(16)}`, false);
	}
}