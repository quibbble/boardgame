import React, { useEffect, useState } from "react";
import { Adjectives, Nouns, NumToText } from "../util/words";
import { CreateGame, Health } from "../api/API";
import { IoMdInformationCircleOutline } from "react-icons/io"
import { Footer } from "../components/Footer"

export function HomePage({ config, navigate }) {

    const [gameID, setGameID] = useState(`${ Adjectives[Math.floor(Math.random()*Adjectives.length)] }-${ Nouns[Math.floor(Math.random()*Nouns.length)] }`);
    const [teams, setTeams] = useState(config.minTeams);
    const [variant, setVariant] = useState(Object.keys(config.variants).length > 0 ? Object.keys(config.variants)[0] : null)
    const [showVariantPopop, setShowVariantPopup] = useState(false)

    useEffect(() => {
        async function fetchHealth() {
            let response = await Health(config.host);
            if (!response || response.status !== 200) navigate(`/status/down`);
        }
        fetchHealth()
    }, [history])

    async function handleGo(e) {
        e.preventDefault();
        let status = await CreateGame(config.host, config.key, gameID, teams, variant);
        if (status === 201 || status === 400) navigate(`/${ gameID }`);
    }
    return (
        <div>
            <div className="flex flex-col items-center m-8 md:m-12">
                {
                    showVariantPopop ? 
                        <div className="absolute w-full h-full top-0 bg-zinc-500 bg-opacity-50 flex items-center justify-center fade-in">
                            <div className="px-4 py-4 bg-zinc-800 mx-2">
                                <p className="font-bold text-center mb-1"><span className={`text-3xl font-black font-['${ config.font }'] text-${ config.color } mr-1`}>{ config.key }</span> variants</p>
                                
                                {
                                    Object.keys(config.variants).map(variant => <p key={ variant } className="text-sm"><span className="font-bold">{ variant }:</span> { config.variants[variant] }</p>)
                                }
                                
                                <button className="w-full bg-red-500 mt-2" onClick={() => setShowVariantPopup(false)}>close</button>
                            </div>
                        </div> : <></>
                }
                <div className="w-full max-w-2xl">
                    <div className="flex flex-col items-center fade-in">
                        <div className={` text-5xl font-black font-['${ config.font }'] text-${ config.color } mb-1 cursor-pointer`}>
                            <a href={ `${ window.location.protocol }//${ window.location.host }` }>{ config.key }</a>
                        </div>
                        <div className="font-thin mb-3">
                            Play { config.minTeams === config.maxTeams ? `${ NumToText[config.minTeams] }` : `${ NumToText[config.minTeams] } to ${ NumToText[config.maxTeams] }`} player { config.key } online against friends.
                            To create a game or join an existing one, enter a game ID and click 'Go'.
                        </div>
                        <form className="w-full flex mb-2" onSubmit={ handleGo }>
                            <input className="w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2" autoFocus type="text" value={ gameID } onChange={ e => setGameID(e.target.value) }/>
                            <button className="w-2/12 font-bold grow-0 bg-blue-500">Go</button>
                        </form>
                        <div className="flex w-full justify-between flex-wrap">
                            <div className="italic text-xs bg-blue-500 py-1 px-2 order-2 md:order-1">
                                <a href="https://quibbble.com">more <span className="font-['lobster'] text-sm not-italic">quibbble</span> games</a>
                            </div>
                            <div className="flex items-center order-1 md:order-2 mb-2 md:mb-0">
                                {
                                    variant ? <>
                                        <IoMdInformationCircleOutline className="mr-1 text-xl cursor-pointer" onClick={() => setShowVariantPopup(true)}/>
                                        <div className="mr-1 font-black text-blue-500">VARIANT</div>
                                        <select className="mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none" id="players" onChange={ e => setVariant(e.target.value.replace(/\s/g, "")) }>
                                            { Object.keys(config.variants).map(el => <option key={ el } value={ el }>{ el }</option>) }
                                        </select>
                                    </> : null
                                }
                                {
                                    config.minTeams !== config.maxTeams ? <>
                                        <div className="mx-1 font-black text-blue-500">PLAYERS</div>
                                        <select className="bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none" id="players" onChange={ e => setTeams(parseInt(e.target.value)) }>
                                            { Array(config.maxTeams - config.minTeams + 1).fill().map((_, idx) => config.minTeams + idx).map(el => <option key={ el } value={ el }>{ el }</option>) }
                                        </select>
                                    </> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 md:bottom-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
