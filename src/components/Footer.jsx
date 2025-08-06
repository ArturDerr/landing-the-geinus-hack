import { Button } from "../shared/button"
import React from "react"

export const Footer = () => {
    return (
        <div className="flex-col justify-center items-center ml-[24px] mr-[24px] mt-[60px]">
            <div className="justify-center flex-col items-center text-center min-h-[200px] bg-card rounded-[30px] border border-stroke w-full xl:w-[1230px] mx-auto">
                <p className="mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{следи за новостями хакатона}"}</p>
                <h1 className="font-benzin-semibold text-[20px] mt-[10px] text-white sm:text-[30px] pr-10 pl-10">ПОДПИШИСЬ НА ТЕЛЕГРАМ КАНАЛ</h1>
                <div className="flex justify-center items-center mb-8 mt-[25px]">
                    <div className="group flex items-center w-max pl-[20px] pr-[20px] h-[40px] rounded-[100px] border-[1px] border-white cursor-pointer transition-colors duration-400 hover:bg-green hover:border-green sm:pl-[30px] sm:pr-[30px] sm:h-[57px] sm:border-[1.50px]">
                        <p className="text-[12px] text-center flex transition-colors font-medium font-montserrat text-white group-hover:text-black sm:text-[20px]">Подписаться</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center text-center mt-[20px] mb-[20px]">
                <p className="text-white text-[13px] flex transition-colors font-medium font-montserrat sm:text-[18px]">©2025 The Genius Hack. Все права защищены.</p>
            </div>
        </div>
    )
}