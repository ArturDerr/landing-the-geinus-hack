import React, { useEffect, useState } from "react"
import { Burger } from "../shared/BurgerButton"
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useWindowSize } from "react-use";
import { BurgerMenu } from "../shared/BurgerMenu";

export const Header = () => {
    const [pressedBurger, setPressedBurger] = useState(false)
    const { scrollY } = useScroll()
    const { width } = useWindowSize()

    const headerWidth = useTransform(scrollY, [0, 100], [width >= 1024 ? 1175 : 1175, width >= 1024 ? 475 : 1175])

    const smoothWidth = useSpring(headerWidth, {
        stiffness: 100,
        damping: 20
    })

     useEffect(() => {
        return scrollY.onChange(() => {
            if (pressedBurger) {
                setPressedBurger(false)
            }
        })
    }, [scrollY, pressedBurger])

    return (
        <motion.header className="flex justify-center transition-transform duration-300 m-[12px] mt-[-59px] sm:mt-[10px] fixed left-0 right-0 z-[1000]">
            <motion.div style={{ width: smoothWidth }} className="relative flex w-full max-w-[475px] xl:max-w-[1175px] pl-5 pr-3 justify-between items-center h-12 bg-black/5 rounded-[79.68px] border-[0.5px] border-stroke backdrop-blur-[20px]">
                <p className="justify-start text-white font-benzin text-[15px]">The Genius Hack</p>
                <Burger onPressed={setPressedBurger} pressed={pressedBurger}/>
                <AnimatePresence>
                    {pressedBurger && (
                        <motion.div key="burger-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute right-63 top-full mt-5 z-50">
                            <BurgerMenu />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.header>
    )
}