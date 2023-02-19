import { Context, Markup, Telegraf } from "telegraf";

export default async function registerMenuModule(bot: Telegraf) {
  const buttons = Markup.keyboard([["Usta", "Mijoz"]]).resize().oneTime();

  bot.action("register", async (ctx: Context) => {
    ctx.deleteMessage()
    ctx.reply(`Ro'yxatdan o'tish uchun tanlang:`, buttons);
  });
}
