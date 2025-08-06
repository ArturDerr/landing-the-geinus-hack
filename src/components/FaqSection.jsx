import React, { useState } from "react"
import { Faqs } from "../shared/Faqs"

export const FaqSection = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Сколько будет длиться хакатон?",
            content: "Хакатон пройдет с 27 по 28 августа. А регистрация закроется за 3 дня до начала хакатона.",
            open: false
        },
        {
            question: "Нужна ли команда?",
            content: "Да, от 2 до 4 человек. Если же команды нет, можете зарегистрироваться индивидуально, а позже собрать команду на платформе Codenrock.",
            open: false
        },
        {
            question: "Какой приз?",
            content: "Всем участникам - сертификаты об участии, команде победителям - подписка телеграм-премиум каждому.",
            open: false
        },
        {
            question: "Кто может участвовать?",
            content: "Разработчики, дизайнеры, аналитики, DevOps, ML/AI-специалисты, QA-специалисты и так далее.",
            open: false
        },
        {
            question: "Как принять участие?",
            content: "Необходимо зарегистрироваться на платформе Codenrock и перейти по ссылке для регистрации на хакатон https://example.com",
            open: false
        },
        {
            question: "Мне нет 18, могу ли я участвовать?",
            content: "Да, можете. На хакатоне не предусмотрены ограничения по возрасту.",
            open: false
        },
        {
            question: "Какой стек можно использовать?",
            content: "Любой :) На хакатоне не предусмотрено ограничений по стеку.",
            open: false
        },
        {
            question: "Что делать, если остались вопросы?",
            content: "Вы можете написать нашему менеджеру https://t.me/landsheem, или написать на почту thegeniushackathon@gmail.com",
            open: false
        },
    ])

    const toggleFAQ = (index) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
                return faq;
            })
        );
    };
    return (
        <div id="faq">
            <div className="flex-col justify-center text-center mt-[90px] sm:mt-[140px]">
                <p className="mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{вопросы}"}</p>
                <h1 className="font-benzin-semibold text-[25px] text-white sm:text-[30px]">FAQ</h1>
                <p className="mt-[10px] text-[17px] text-white font-montserrat font-medium sm:text-[23px] sm:mt-[20px] leading-5 sm:leading-7">Часто задаваемые вопросы</p>
            </div>
            <div className="flex-row justify-center mt-[45px] mx-auto max-w-[1270px]">
                {faqs.map((faq, index) => (
                    <Faqs faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    )
}