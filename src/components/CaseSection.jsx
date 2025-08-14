import React from "react"

export const CaseSection = () => {
    return (
        <div className="flex-col justify-center ml-[24px] mr-[24px] mt-[60px] sm:mt-[150px]" id="case">
            <div className="max-w-[1240px] mx-auto">
                <p className="xl:ml-[10px] mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{задание}"}</p>
                <h1 className="xl:ml-[10px] font-benzin-semibold text-[25px] mt-[5px] sm:mt-[10px] text-white sm:text-[30px] leading-7">КЕЙС</h1>
            </div>
            <div className="flex gap-[14px] mt-[35px] max-w-[1230px] mx-auto">
                <div className="xl:ml-[10px] relative overflow-hidden flex-row min-h-[246px] pb-[15px] sm:pb-[25px] h-auto bg-card rounded-[30px] border border-stroke w-full xl:w-[1230px] transition-colors pr-15">
                    <div className="flex border-[1px] ml-[18px] mt-[20px] w-[148px] sm:w-[185px] items-center border-green pl-[15px] pr-[15px] h-[30px] rounded-[100px] sm:h-[36px] sm:ml-[25px] sm:pl-[20px] sm:pr-[20px] sm:mt-[25px]">
                        <p className="flex font-montserrat text-center font-medium text-green text-[12px] sm:text-[15px]">2 дня на решение</p>
                    </div>
                    <p className="font-montserrat font-medium text-[17px] sm:text-[23px] mt-[80px] ml-[20px] text-white sm:mt-[85px] sm:ml-[30px] leading-6 sm:leading-7.5 md:mt-[90px]">Разработайте <span className="text-green">веб-платформу</span>, которая поможет волонтерам и организациям находить друг друга, координировать мероприятия и отслеживать прогресс. Платформа должна быть удобной, интуитивно понятной и масштабируемой.</p>
                </div>
            </div>
        </div>
    )
}