import React from "react"
import Marquee from "react-fast-marquee"

export const ScrollBar = () => {
    return (
        <Marquee autoFill="true">
            <div className="flex border-[1px] ml-[8px] mt-[30px] items-center border-green pl-[15px] pr-[15px] h-[30px] rounded-[100px] sm:h-[36px] sm:ml-[9px] sm:pl-[20px] sm:pr-[20px] sm:mt-[45px]">
                <p className="flex font-montserrat text-center font-medium text-green text-[12px] sm:text-[15px]">из любой точки мира</p>
            </div>
            <div className="flex ml-[8px] mt-[30px] items-center bg-green pl-[15px] pr-[15px] h-[30px] rounded-[100px] sm:h-[36px] sm:ml-[9px] sm:pl-[20px] sm:pr-[20px] sm:mt-[45px]">
                <p className="flex font-montserrat text-center font-medium text-black text-[12px] sm:text-[15px]">командный</p>
            </div>
            <div className="flex border-[1px] ml-[8px] mt-[30px] items-center border-green pl-[15px] pr-[15px] h-[30px] rounded-[100px] sm:h-[36px] sm:ml-[9px] sm:pl-[20px] sm:pr-[20px] sm:mt-[45px]">
                <p className="flex font-montserrat text-center font-medium text-green text-[12px] sm:text-[15px]">онлайн</p>
            </div>
            <div className="flex ml-[8px] mt-[30px] items-center bg-green pl-[15px] pr-[15px] h-[30px] rounded-[100px] sm:h-[36px] sm:ml-[9px] sm:pl-[20px] sm:pr-[20px] sm:mt-[45px]">
                <p className="flex font-montserrat text-center font-medium text-black text-[12px] sm:text-[15px]">любой стек</p>
            </div>
        </Marquee>
    )
}