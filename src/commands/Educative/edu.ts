import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'educative',
            description: 'shows educative section',
            category: 'educative',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['4']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help5.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
Greetings ${M.sender.username}
    You requested ${this.client.config.prefix}educative command
 \`\`\`👾Available Commands👾\`\`\`
   
        「 Educative 」
 *- ${this.client.config.prefix}crypto*
 *- ${this.client.config.prefix}github*
 *- ${this.client.config.prefix}urban*
 *- ${this.client.config.prefix}weather*
 *- ${this.client.config.prefix}covid*
 *- ${this.client.config.prefix}element*

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
