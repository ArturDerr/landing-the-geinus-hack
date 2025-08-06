import Dither from "../animation/dither"
import React from "react"
import { Button } from "../shared/button"
import { MainText } from "../shared/MainText"

export const MainSection = () => {
    return (
        <main className="w-full px-[12px] mt-[70px] sm:mt-[12px]">
            <div className="w-full max-w-[1750px] h-[350px] sm:h-[668px] mx-auto rounded-[30px] overflow-hidden flex items-center justify-center">
                <Dither waveColor={[0.5, 0.5, 0.5]} disableAnimation={false} enableMouseInteraction={true} mouseRadius={0.3} colorNum={4} waveAmplitude={0.2} waveFrequency={3} waveSpeed={0.05}/>
                <MainText />
                <div className="absolute pointer-events-none">
                    <p className="text-white font-benzin z-10 text-[12px] mb-18 ml-[100px] sm:text-[20px] sm:ml-[150px] sm:mb-26 select-none">27 — 30 августа</p>
                </div>
                <div className="absolute pointer-events-none">
                    <p className="text-white font-benzin text-[12px] mt-[100px] ml-[185px] sm:text-[20px] sm:mt-58 sm:ml-83 select-none">x Geniuses Team</p>
                </div>
                <div className="flex items-center mt-65 justify-center sm:mt-130 absolute">
                    <Button title={"Принять участие"}/>
                </div>
            </div>
        </main>
    )
}