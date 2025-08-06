import React from "react"

export const BurgerMenu = () => {

    return (
        <div className="absolute flex-col transition-colors h-auto bg-card rounded-[30px] border border-stroke w-[252px]">
            <a href="#about" className="block cursor-pointer font-montserrat font-medium text-[17px] sm:text-[17px] ml-[20px] mt-[20px] text-white hover:text-green transition-colors">О хакатоне</a>
            <a href="#part" className="block cursor-pointer font-montserrat font-medium text-[17px] sm:text-[17px] ml-[20px] mt-[7px] text-white hover:text-green transition-colors">Участие</a>
            <a href="#prizes" className="block cursor-pointer font-montserrat font-medium text-[17px] sm:text-[17px] ml-[20px] mt-[7px] text-white hover:text-green transition-colors">Призовой фонд</a>
            <a href="#case" className="block cursor-pointer font-montserrat font-medium text-[17px] sm:text-[17px] ml-[20px] mt-[7px] text-white hover:text-green transition-colors">Кейс</a>
            <a href="#org" className="block cursor-pointer font-montserrat font-medium text-[17px] sm:text-[17px] ml-[20px] mt-[7px] text-white hover:text-green transition-colors">Организаторы</a>
            <a href="#faq" className="block cursor-pointer font-montserrat font-medium text-[17px] sm:text-[17px] ml-[20px] mt-[7px] mb-[20px] hover:text-green transition-colors text-white">FAQ</a>
        </div>
    )
}