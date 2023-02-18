import { Context, Markup, Telegraf } from "telegraf";

export default async function registerMenuModule (bot: Telegraf) {

    // const keyboard = Markup.inlineKeyboard([
    //     Markup.button.callback('Usta', 'register_specialist'),
    //     Markup.button.callback('Mijoz', 'register_client')
    // ])

    const buttons = Markup.keyboard(
        [
            ['Usta', 'Mijoz']
        ]
    ).resize()

    bot.action('register', async(ctx: Context) => {
        ctx.reply(`Ro'yxatdan o'tish uchun tanlang:`, buttons)
    })
}