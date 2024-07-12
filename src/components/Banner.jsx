import React from "react";

const Link = ({ href, title, className }) => (
    <a className={`${ className } text-zinc-100 hover:text-zinc-800 transition ease-in-out`} href={ href } target="_blank" rel="noreferrer">
        { title }
    </a>
)


export function Banner() {
    return (
        <div className="flex flex-col items-center w-full p-2 text-lg font-bold text-zinc-800 bg-amber-500">
            <div className="flex">
                We're moving! Check out the new look out at&nbsp; <Link className="underline" href="https://quibbble.com" title="quibbble.com" />.
            </div>
        </div>
    )
}
