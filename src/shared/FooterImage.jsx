import footerImage from "/images/footer-img.svg"
import React from "react"

export const FooterImage = () => {
    return (
        <div className="w-full overflow-hidden flex mt-[110px] sm:mt-[200px]">
            <img src={footerImage} className="w-[auto] h-auto repeat-img" />
            <img src={footerImage} className="w-[auto] h-auto repeat-img" />
            <img src={footerImage} className="w-[auto] h-auto repeat-img" />
            <img src={footerImage} className="w-[auto] h-auto repeat-img" />
            <img src={footerImage} className="w-[auto] h-auto repeat-img" />
        </div>
    )
}