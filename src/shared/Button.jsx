import React from "react"

export const Button = ({ title }) => {
    return (
        <div onClick={() => window.open("https://t.me/+w5rjdLcHyeI2NjMy", "_blank")} className="absolute group flex items-center w-max pl-[20px] pr-[20px] h-[40px] rounded-[100px] border-[1px] border-white cursor-pointer transition-colors duration-400 hover:bg-green hover:border-green sm:pl-[30px] sm:pr-[30px] sm:h-[57px] sm:border-[1.50px]">
            <a className="text-[12px] text-center flex transition-colors font-medium font-montserrat text-white group-hover:text-black sm:text-[20px]">{title}</a>
        </div>
    )
}