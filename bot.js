import { Telegraf, Markup } from 'telegraf';

const token = '7843076796:AAF7k9Bvr_KuyeeRsAFpfZLh3VfEHIdjLBQ';
const wedAppUrl = 'https://download-omega-orpin.vercel.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(`Запустить мини-приложение для загрузки видео ${ctx.payload}`, Markup.inlineKeyboard([
        Markup.button.webApp(
            `Запуск приложения`,
            `${wedAppUrl}?user_id=${ctx.from?.id}&chat_id=${ctx.chat?.id}`
        )
    ]));
});

bot.launch();
