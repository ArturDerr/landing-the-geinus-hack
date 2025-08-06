import React from "react"
import { ScrollBar } from "../shared/ScrollBar"
import bracketLeft from "/images/bracket-left.svg"
import bracketRight from "/images/bracket-right.svg"

export const AboutSection = () => {
    return (
        <div id="about">
            <ScrollBar />
            <div className="flex-col justify-center text-center">
                <p className="mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{о хакатоне}"}</p>
                <h1 className="font-benzin-semibold text-[25px] text-green sm:text-[30px]"><span className="text-white">ЧТО ЗА</span> ХАКАТОН?</h1>
                <p className="mt-[20px] text-[17px] text-white font-montserrat font-medium sm:text-[23px] sm:mt-[30px] leading-5 sm:leading-7">Командный хакатон <span className="text-green">без <br/>ограничений</span> по стеку и возрасту. <br/><span className="text-green">Главное</span> — найти лучшее решение <br/>кейса. Собери команду и покажи, <br/>на что вы способны.</p>
            </div>
        </div>
    )
}