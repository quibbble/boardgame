import React from "react";

const Link = ({ href, title, className }) => (
    <a className={`${ className } text-zinc-300 hover:text-zinc-100 transition ease-in-out`} href={ href } target="_blank" rel="noreferrer">
        { title }
    </a>
)


export function Footer() {
    return (
        <div className="flex flex-col items-center w-full font-light text-sm">
            <div className="flex">
                <Link href="mailto:hello@quibbble.com" title="Contact" />
                <p className="mx-2 md:mx-4">/</p>
                <Link href="https://www.buymeacoffee.com/quibbble" title="Support" />                
                <p className="mx-2 md:mx-4">/</p>
                <Link href="https://discord.gg/VKvjutuhUp" title="Discord" />                
                <p className="mx-2 md:mx-4">/</p>
                <Link href="https://github.com/quibbble" title="Github" />                
                <p className="mx-2 md:mx-4">/</p>
                <Link href="https://status.quibbble.com" title="Status" />                
            </div>
            <p className="mt-4 text-zinc-300 flex">Made with ♥ by&nbsp;<Link className="underline" href="https://chrisfregly.com" title=" Chris Fregly" /></p>
        </div>
    )
}
