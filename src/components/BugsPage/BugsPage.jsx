import React, { useRef } from "react";
import ReactMarkdown from 'react-markdown'
import { useNavigate } from "react-router-dom";
import remarkGfm from 'remark-gfm'
import { Footer } from "../Footer";

export function BugsPage({ config }) {

    const navigate = useNavigate();
    const myRef = useRef()

    const gameID = sessionStorage.getItem("gameID");

    const bugMD = `
Find a bug? There are two ways to send a report:
1. Send an email to support@quibbble.com.
2. Join our [Discord](https://discord.gg/VKvjutuhUp) and send a report in the **#bugs** channel.

In your bug report message please include the following:
1. The URL of the game, for example https://tsuro.quibbble.com/excited-cat-23.
2. A description of the bug:
    - What happened?
    - What should have happened?
3. Optionally, screenshots of the game to help diagnose the issue.

Reports go a long way to improving the site for everyone so they are greatly appreciated. As always, thanks for playing and contributing to [quibbble.com](https://quibbble.com).

~ *Chris*
`

    return (
        <div ref={myRef} className="flex flex-col items-center m-2 md:m-12">
            <div className="w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md">
                <article className="prose dark:prose-invert max-w-fit fade-in">
                    
                    <div className="flex flex-col md:flex-row w-full h-full justify-between items-center">
                        <div className="text-4xl font-black mb-6 md:mb-0">
                            <span className={`text-5xl font-black font-['${ config.font }'] text-${ config.color } mr-1`}>
                                { config.key }
                            </span> Bug Report
                        </div>
                        <button onClick={ () => gameID ? navigate("/" + gameID) : navigate("/") } className="bg-blue-500 px-6 py-2 font-bold italic">{ gameID ? "Back" : "Play Online"}</button>
                    </div>
                
                    <ReactMarkdown children={ bugMD } remarkPlugins={[remarkGfm]} />
                
                </article>
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}