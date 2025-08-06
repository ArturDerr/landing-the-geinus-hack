import React, { useState } from "react"

export const Burger = ({ onPressed, pressed }) => {
    return (
        <button className="cursor-pointer group inline-flex w-12 h-12 text-white text-center hover:text-green items-center justify-center rounded transition" aria-pressed={pressed} onClick={() => onPressed(!pressed)}>
            <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16">
                <rect className="origin-center -translate-y-[5px] translate-x-[0px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-[315deg]" y="7" width="16" height="2" rx="1"/>
                <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-pressed:rotate-45" y="7" width="16" height="2" rx="1"/> 
                <rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-y-0 group-aria-pressed:rotate-[135deg]" y="7" width="16" height="2" rx="1"/>
            </svg>
        </button>
    )
}