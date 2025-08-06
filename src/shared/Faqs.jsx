import React from "react"
import plus from "/images/plus.svg"
import minus from "/images/minus.svg"
import { motion, AnimatePresence } from "framer-motion"

export const Faqs = ({ faq, index, toggleFAQ }) => {
    return (
        <div className="max-w-[630px] mt-[14px] sm:mx-auto sm:w-[630px] ">
            <div className="text-white flex-row h-auto bg-card rounded-[30px] border border-stroke lg:ml-[0] lg:mr-[0] ml-[24px] mr-[24px] transition-colors cursor-pointer hover:bg-card-hover" key={index} onClick={() => toggleFAQ(index)}>
                <div className="flex items-center justify-between w-full">
                    <p className="p-[20px] sm:p-[30px] font-montserrat font-medium text-[17px] sm:text-[23px] text-white">
                        {faq.question}
                    </p>
                    <img src={plus} className={`w-[30px] h-[30px] mr-[20px] sm:mr-[30px] transition-transform duration-300 ease-in-out ${faq.open ? "rotate-45" : "rotate-0"}`}/>
                </div>
                <AnimatePresence initial={false}>
                    {faq.open && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.1, ease: "easeInOut" }} className="overflow-hidden px-[20px] sm:px-[30px] pb-[20px] font-montserrat font-medium text-[17px] sm:text-[23px] text-text leading-7">
                            <p>{faq.content}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}