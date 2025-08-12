import React, { useRef } from "react"
import { ScrollBar } from "../shared/ScrollBar"
import bracketLeft from "/images/bracket-left.svg"
import bracketRight from "/images/bracket-right.svg"
import { motion, useScroll, useTransform } from "framer-motion";

export const AboutSection = () => {
     const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], 
    });

    const yOffset = useTransform(scrollYProgress, [0, 1], [0, -300]);
    return (
        <div id="about">
            <ScrollBar />
            <div className="flex-col justify-center text-center">
                <p className="mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{о хакатоне}"}</p>
                <h1 className="font-benzin-semibold text-[25px] text-green sm:text-[30px]"><span className="text-white">ЧТО ЗА</span> ХАКАТОН?</h1>
                <p className="mt-[20px] text-[17px] text-white font-montserrat font-medium sm:text-[23px] sm:mt-[30px] leading-5 sm:leading-7">Командный хакатон <span className="text-green">без <br/>ограничений</span> по стеку и возрасту. <br/><span className="text-green">Главное</span> — найти лучшее решение <br/>кейса. Собери команду и покажи, <br/>на что вы способны.</p>
            </div>
            <div ref={targetRef} className="relative">
                <motion.img
                    src={bracketLeft}
                    style={{ y: yOffset }}
                    className="pointer-events-none select-none absolute top-10 left-[300px] z-[3] hidden 2xl:block"
                />
                <motion.img
                    src={bracketRight}
                    style={{ y: yOffset }}
                    className="pointer-events-none select-none absolute top-10 left-[1300px] z-[4] hidden 2xl:block"
                />
            </div>
        </div>
    )
}