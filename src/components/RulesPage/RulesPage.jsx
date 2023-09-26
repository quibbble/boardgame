import React, { useRef } from "react";
import ReactMarkdown from 'react-markdown'
import { useNavigate } from "react-router-dom";
import remarkGfm from 'remark-gfm'
import { Footer } from "../Footer";

export function RulesPage({ config, rules }) {

    const navigate = useNavigate();
    const myRef = useRef()

    const executeScroll = () => myRef.current.scrollIntoView()

    const gameID = sessionStorage.getItem("gameID");

    return (
        <div ref={myRef} className="flex flex-col items-center m-2 md:m-12">
            <div className="w-full max-w-3xl bg-zinc-900 p-8 md:p-12 rounded-md">
                <article className="prose dark:prose-invert max-w-fit fade-in">
                    
                    <div className="flex flex-col md:flex-row w-full h-full justify-between items-center">
                        <div className="text-4xl font-black mb-6 md:mb-0">
                            <span className={`text-5xl font-black font-['${ config.font }'] text-${ config.color } mr-1`}>
                                { config.key }
                            </span> Game Rules
                        </div>
                        <button onClick={ () => gameID ? navigate("/" + gameID) : navigate("/") } className="bg-blue-500 px-6 py-2 font-bold italic">{ gameID ? "Back" : "Play Online"}</button>
                    </div>
                
                    <ReactMarkdown children={ rules } remarkPlugins={[remarkGfm]} />
                
                </article>
                <div className="mt-12 flex flex-col w-full items-center">
                    <button className="text-zinc-500 font-light italic" onClick={ executeScroll }>
                        back to top 👆
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    )
}