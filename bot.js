import { Telegraf, Markup } from 'telegraf';

const token = '7983814494:AAGziMOyblq_QGgt4SUIcX9Jdz2UktcCGdk';
const wedAppUrl = 'https://download-lemon.vercel.app/';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(`Запустить мини-приложение для загрузки видео по ссылке. Ссылка на канал https://t.me/+rqOeZM6Fsd02N2Ri`, Markup.inlineKeyboard([
        Markup.button.webApp(
            `Запуск приложения`,
            `${wedAppUrl}?user_id=${ctx.from.id}&chat_id=${ctx.chat.id}&request_full_screen=true`
        )
    ]));
});

bot.launch();


// https://api.telegram.org/bot7843076796:AAF7k9Bvr_KuyeeRsAFpfZLh3VfEHIdjLBQ/getUpdates 
