import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'dev',
            description: 'shows dev section',
            category: 'dev',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['3']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help4.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
Greetings ${M.sender.username}
    You requested ${this.client.config.prefix}dev command
  \`\`\`👾Available Commands👾\`\`\`
   
        *━━━━❰ Dev ❱━━━━*
 *- ${this.client.config.prefix}Ban*
 *- ${this.client.config.prefix}Eval*
 *- ${this.client.config.prefix}Status*
 *- ${this.client.config.prefix}join*
 *- ${this.client.config.prefix}leave*
 *- ${this.client.config.prefix}unban*
 *- ${this.client.config.prefix}bc*

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
