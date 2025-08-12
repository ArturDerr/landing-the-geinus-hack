import React from "react"
import card1 from "/images/card-1.svg"
import AnimatedContent from '../animation/AnimatedContent'
import card4 from "/images/card-4.svg"

export const PartSection = () => {
    return (
        <div className="flex-col justify-center ml-[24px] mr-[24px] mt-[60px] sm:mt-[150px]" id="part">
            <div className="max-w-[1240px] mx-auto">
                <p className="sm:ml-[5px] mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{участие}"}</p>
                <h1 className="sm:ml-[5px] font-benzin-semibold text-[25px] mt-[5px] sm:mt-[10px] text-green sm:text-[30px] leading-7"><span className="text-white">КТО ПРИНИМАЕТ</span> УЧАСТИЕ?</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-[14px] mt-[35px] max-w-[1240px] mx-auto">
                <div className="w-full sm:w-[calc(50%-7px)] lg:w-[calc(33%-9.33px)] xl:w-[395px]">
                    <AnimatedContent
                        distance={50}
                        reverse={false}
                        duration={0.5}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.5}
                        threshold={0.1}
                        delay={0.05}>
                        <div className="relative overflow-hidden flex h-[200px] bg-card rounded-[30px] border border-stroke">
                            <img
                            className="object-contain w-[162px] h-[108px] md:w-[212.17px] md:h-[150px] absolute ml-[130px] mt-[20px] sm:ml-[160px]"
                            src={card1}
                            />
                            <p className="font-montserrat font-medium text-[17px] sm:text-[23px] mt-[155px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">
                            Разработчики
                            </p>
                        </div>
                    </AnimatedContent>
                </div>

                <div className="w-full sm:w-[calc(50%-7px)] lg:w-[calc(33%-9.33px)] xl:w-[395px]">
                    <AnimatedContent 
                        distance={50}
                        reverse={false}
                        duration={0.5}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.5}
                        threshold={0.1}
                        delay={0.05}>
                        <div className="h-[200px] bg-card rounded-[30px] border border-stroke">
                            <p className="font-montserrat font-medium text-[17px] sm:text-[23px] mt-[155px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">
                            UI/UX-дизайнеры
                            </p>
                        </div>
                    </AnimatedContent>
                </div>

                <div className="w-full sm:w-[calc(50%-7px)] lg:w-[calc(33%-9.33px)] xl:w-[395px]">
                    <AnimatedContent 
                        distance={50}
                        reverse={false}
                        duration={0.5}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.5}
                        threshold={0.1}
                        delay={0.05}>
                        <div className="h-[200px] bg-card rounded-[30px] border border-stroke">
                            <p className="font-montserrat font-medium text-[17px] sm:text-[23px] mt-[155px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">
                            Аналитики
                            </p>
                        </div>
                    </AnimatedContent>
                </div>

                <div className="w-full sm:w-[calc(50%-7px)] lg:w-[calc(33%-9.33px)] xl:w-[395px]">
                    <AnimatedContent 
                        distance={50}
                        reverse={false}
                        duration={0.5}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.5}
                        threshold={0.1}
                        delay={0.05}>
                        <div className="h-[200px] bg-card rounded-[30px] border border-stroke">
                            <p className="font-montserrat font-medium text-[17px] sm:text-[23px] mt-[155px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">
                            DevOps
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
                <div className="w-full sm:w-[calc(50%-7px)] lg:w-[calc(33%-9.33px)] xl:w-[395px]">
                    <AnimatedContent 
                        distance={50}
                        reverse={false}
                        duration={0.5}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.5}
                        threshold={0.1}
                        delay={0.05}>
                        <div className="relative overflow-hidden flex h-[200px] bg-card rounded-[30px] border border-stroke">
                            <img
                            className="object-contain w-[93] h-[85px] md:w-[121px] md:h-[120px] absolute ml-[200px] mt-[20px] sm:ml-[240px]"
                            src={card4}
                            />
                            <p className="font-montserrat font-medium text-[17px] sm:text-[23px] mt-[155px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">
                            ML/AI-специалисты
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
                <div className="w-full sm:w-[calc(50%-7px)] lg:w-[calc(33%-9.33px)] xl:w-[395px]">
                    <AnimatedContent 
                        distance={50}
                        reverse={false}
                        duration={0.5}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.5}
                        threshold={0.1}
                        delay={0.05}>
                        <div className="h-[200px] bg-card rounded-[30px] border border-stroke">
                            <p className="font-montserrat font-medium text-[17px] sm:text-[23px] mt-[155px] ml-[20px] text-white sm:mt-[140px] sm:ml-[30px]">
                            QA-специалисты
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </div>
    )
}