import { Context, Telegraf } from "telegraf";
import { serviceModel } from "../model";

export default async function startModule (bot: Telegraf) {
    bot.command('start', async(ctx: Context) => {
        const customers = await serviceModel.find()
        console.log(customers)
        ctx.reply('Asssalomu aleykum, ' + ctx.from?.first_name + '!\n\n' + '_Mutahasislar va mijozlarni vaqtini\ntejash uchun ishlab chiqarilgan\nbotga xush kelibsiz_', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: `Ro'yxatdan o'tish`, callback_data: 'register' }]
                ]
            },
            parse_mode: 'Markdown'
        })
    })
}