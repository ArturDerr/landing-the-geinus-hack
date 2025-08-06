import React, { useRef } from "react"
import imageFirst from "/images/image-1.svg"
import imageSecond from "/images/image-2.svg"
import imageThird from "/images/image-3.svg"
import arrow from "/images/arrow.svg"

export const OrganazierSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const cardWidth = container.firstChild.offsetWidth + 14; 
        container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    };
    return (
        <div className="flex-col justify-center ml-[24px] mr-[24px] mt-[70px] sm:mt-[150px]" id="org">
            <div className="max-w-[1240px] mx-auto">
                <p className="xl:ml-[10px] mt-[30px] font-montserrat font-medium text-[15px] text-text sm:text-[20px] sm:mt-[45px]">{"{орги}"}</p>
                <div className="flex-col flex sm:flex-row">
                    <h1 className="xl:ml-[10px] font-benzin-semibold text-[25px] mt-[5px] sm:mt-[10px] text-white sm:text-[30px] leading-7 md:leading-9">ОРГАНИЗАТОРЫ <br/><span className="text-green">И ЭКСПЕРТЫ</span></h1>
                    <div className="flex-row flex sm:float-right sm:mr-0 sm:ml-auto">
                        <button onClick={() => scroll(-1)} className="cursor-pointer w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mt-[30px] bg-card rounded-full border border-stroke items-center justify-center transition-colors flex hover:border-green">
                            <img src={arrow} className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]"/>
                        </button>
                        <button onClick={() => scroll(1)} className="cursor-pointer w-[50px] h-[50px] ml-[7px] sm:w-[60px] sm:h-[60px] mt-[30px] bg-card rounded-full border border-stroke items-center transition-colors justify-center flex hover:border-green">
                            <img src={arrow} className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] rotate-180"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto mt-[35px] flex sm:justify-center overflow-hidden">
                <div ref={scrollRef} className="flex gap-[14px] overflow-x-auto scroll-smooth  hide-scrollbar">
                    <div className="max-w-[400px] relative flex-shrink-0 w-full">
                        <img src={imageSecond} className="w-full flex-shrink-0" />
                        <p className="absolute bottom-11 font-montserrat font-medium text-[19px] sm:text-[23px] mt-[15px] ml-[20px] text-green sm:ml-[30px]">Артур Дерр</p>
                        <p className="absolute bottom-5 font-montserrat font-medium text-[13px] sm:text-[14px] mt-[15px] ml-[20px] text-white sm:ml-[30px]">Frontend-разработчик</p>
                    </div>
                    <div className="max-w-[400px] relative flex-shrink-0 w-full">
                        <img src={imageFirst} className="w-full flex-shrink-0" />
                        <p className="absolute bottom-11 font-montserrat font-medium text-[19px] sm:text-[23px] mt-[15px] ml-[20px] text-green sm:ml-[30px]">Кирилл Лоторев</p>
                        <p className="absolute bottom-5 font-montserrat font-medium text-[13px] sm:text-[14px] mt-[15px] ml-[20px] text-white sm:ml-[30px]">FullStack-разработчик</p>
                    </div>
                    <div className="max-w-[400px] relative flex-shrink-0 w-full">
                        <img src={imageThird} className="w-full flex-shrink-0" />
                        <p className="absolute bottom-11 font-montserrat font-medium text-[19px] sm:text-[23px] mt-[15px] ml-[20px] text-green sm:ml-[30px]">Джон Смитт</p>
                        <p className="absolute bottom-5 font-montserrat font-medium text-[13px] sm:text-[14px] mt-[15px] ml-[20px] text-white sm:ml-[30px]">Web-разработчик</p>
                    </div>
                    <div className="max-w-[400px] relative flex-shrink-0 w-full">
                        <img src={imageThird} className="w-full flex-shrink-0" />
                        <p className="absolute bottom-11 font-montserrat font-medium text-[19px] sm:text-[23px] mt-[15px] ml-[20px] text-green sm:ml-[30px]">Джон Смитт</p>
                        <p className="absolute bottom-5 font-montserrat font-medium text-[13px] sm:text-[14px] mt-[15px] ml-[20px] text-white sm:ml-[30px]">Web-разработчик</p>
                    </div>
                    <div className="max-w-[400px] relative flex-shrink-0 w-full">
                        <img src={imageThird} className="w-full flex-shrink-0" />
                        <p className="absolute bottom-11 font-montserrat font-medium text-[19px] sm:text-[23px] mt-[15px] ml-[20px] text-green sm:ml-[30px]">Джон Смитт</p>
                        <p className="absolute bottom-5 font-montserrat font-medium text-[13px] sm:text-[14px] mt-[15px] ml-[20px] text-white sm:ml-[30px]">Web-разработчик</p>
                    </div>
                    <div className="max-w-[400px] relative flex-shrink-0 w-full">
                        <img src={imageThird} className="w-full flex-shrink-0" />
                        <p className="absolute bottom-11 font-montserrat font-medium text-[19px] sm:text-[23px] mt-[15px] ml-[20px] text-green sm:ml-[30px]">Джон Смитт</p>
                        <p className="absolute bottom-5 font-montserrat font-medium text-[13px] sm:text-[14px] mt-[15px] ml-[20px] text-white sm:ml-[30px]">Web-разработчик</p>
                    </div>
                </div>
            </div>
        </div>
    )
}