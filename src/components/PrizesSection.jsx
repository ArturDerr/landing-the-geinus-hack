import React from "react"
import { Button } from "../shared/button"
import tg from "/images/telegram-premium.svg"
import certificate from "/images/certificate.svg"
import participant from "/images/participant.svg"

export const PrizesSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center ml-[24px] mr-[24px] mt-[60px] sm:mt-[150px] lg:gap-[170px]" id="prizes">
            <div className="w-full lg:w-auto lg:sticky lg:top-[70px] self-start">
                <p className="sm:ml-[5px] mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{ништяки}"}</p>
                <h1 className="sm:ml-[5px] font-benzin-semibold text-[25px] mt-[5px] sm:mt-[10px] text-green sm:text-[30px] leading-7 sm:leading-8"><span className="text-white">ПРИЗОВОЙ</span> <br/>ФОНД</h1>
                <div className="mt-[15px] sm:mt-[30px] sm:ml-[10px]">
                    <Button title="Участвую"/>
                </div>
            </div>
            <div className="w-full xl:max-w-[804px] md:max-w-[1400px]">
                <div className="relative overflow-hidden flex h-auto pb-[15px] min-h-[200px] bg-card mt-[75px] sm:mt-[100px] lg:mt-[40px] rounded-[30px] border border-stroke w-full md:max-w-[1400px] xl:max-w-[804px] transition-colors pr-10">
                    <img className="object-contain w-[100px] h-[100px] md:w-[140px] md:h-[150px] absolute ml-[20px] mt-[20px] md:ml-[600px]" src={tg}/>
                    <p className="font-montserrat font-medium text-[17px] mt-[140px] sm:text-[23px] ml-[20px] text-white sm:mt-[105px] sm:ml-[30px]">Годовой <span className="text-green">Telegram-премиум</span> <br/> каждому участнику из команды победителей.</p>
                </div>
                <div className="relative overflow-hidden flex pb-[15px] h-auto min-h-[200px] bg-card mt-[14px] rounded-[30px] border border-stroke w-full xl:max-w-[804px] transition-colors pr-10">
                    <img className="object-contain w-[124px] h-[70px] md:w-[162px] md:h-[94px] absolute ml-[20px] mt-[50px] md:mt-[30px]" src={certificate}/>
                    <p className="font-montserrat font-medium text-[17px] mt-[155px] sm:text-[23px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">Сертификаты призерам и победителям хакатона.</p>
                </div>
                <div className="relative overflow-hidden flex pb-[15px] h-auto min-h-[200px] bg-card mt-[14px] rounded-[30px] border border-stroke w-full xl:max-w-[804px] transition-colors pr-10">
                    <img className="object-contain w-[124px] h-[70px] md:w-[162px] md:h-[94px] absolute ml-[30px] sm:ml-[120px] mt-[50px] md:mt-[30px]" src={participant}/>
                    <p className="font-montserrat font-medium text-[17px] mt-[155px] sm:text-[23px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">Сертификаты каждому участнику.</p>
                </div>
                <div className="relative overflow-hidden flex pb-[15px] h-auto min-h-[200px] bg-card mt-[14px] rounded-[30px] border border-stroke w-full xl:max-w-[804px] transition-colors pr-10">
                    <p className="font-montserrat font-medium text-[17px] mt-[140px] sm:text-[23px] ml-[20px] text-white sm:mt-[105px] sm:ml-[30px]">Улучшите софт-скиллы, создадите проект в портфолио и получите опыт решения реальных задач.</p>
                </div>
            </div>
        </div>
    )
}
