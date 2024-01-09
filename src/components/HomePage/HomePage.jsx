import React, { useEffect, useState } from "react";
import { Adjectives } from "../../util/adjectives";
import { Nouns } from "../../util/nouns";
import { NumToText } from "../../util/util";
import { useNavigate } from "react-router-dom";
import { CreateGame, Health } from "../../api/API";
import { Footer } from "../Footer"

export function HomePage(props) {

    const { config, options, setOptions, children } = props

    const navigate = useNavigate();

    const [gameID, setGameID] = useState(`${ Adjectives[Math.floor(Math.random()*Adjectives.length)] }-${ Nouns[Math.floor(Math.random()*Nouns.length)] }-${ Math.floor(Math.random() * (99 - 0 + 1) + 0) }`);
    const [teams, setTeams] = useState(config.minTeams);

    useEffect(() => {
        const checkHealth = async () => {
            let response = await Health(config.host);
            if (!response || response.status !== 200) navigate(`/status/down`);
        }
        checkHealth();

        const interval = setInterval(async () => {
            checkHealth();
        }, 10000);
        return () => clearInterval(interval);
    }, [navigate]);

    async function handleGo(e) {
        e.preventDefault();
        let status = await CreateGame(config.host, config.key, gameID, teams, options);
        if (status === 201 || status === 400) navigate(`/${ gameID }`);
    }
    return (
        <div>
            <div className="flex flex-col items-center m-8 md:m-12">
                <div className="w-full max-w-2xl">
                    <div className="flex flex-col items-center fade-in">
                        <div className={` text-5xl font-black font-['${ config.font }'] text-${ config.color } mb-1 cursor-pointer`}>
                            <a href={ `${ window.location.protocol }//${ window.location.host }` }>{ config.key }</a>
                        </div>
                        <div className="font-thin mb-3">
                            Play { config.minTeams === config.maxTeams ? `${ NumToText[config.minTeams] }` : `${ NumToText[config.minTeams] } to ${ NumToText[config.maxTeams] }`} player { config.key } online against friends.
                            To create a game or join an existing one, enter a game ID and click 'Go'.
                        </div>
                        <form className="w-full flex mb-3" onSubmit={ handleGo }>
                            <input className="w-10/12 p-2 text-zinc-100 bg-zinc-800 rounded-none border border-zinc-100 text-3xl font-medium box-border focus:outline-dashed outline-blue-500 outline-2" autoFocus type="text" value={ gameID } onChange={ e => setGameID(e.target.value) }/>
                            <button className="w-2/12 font-bold grow-0 bg-blue-500">Go</button>
                        </form>
                        <div className="flex w-full justify-between flex-wrap gap-2">
                            <div className="flex order-2 md:order-1">
                                <button onClick={ () => navigate("/rules") } title="how to play" className="mr-3 md:mr-2 p-2 first-line:p-2 bg-blue-500 italic text-xs font-bold">
                                    game rules
                                </button>
                                <a className="italic text-xs py-1 px-2 border-blue-500 border border-dashed text-blue-500" href="https://quibbble.com" target="_blank">more <span className="text-zinc-100 font-['lobster'] text-sm not-italic">quibbble</span> games</a>
                            </div>
                            <div className="overflow-scroll no-scrollbar flex flex-warp items-center order-1 md:order-2 mb-3 md:mb-0">
                                {
                                    options.Variant ? <>
                                        <div className="mr-1 font-black text-blue-500">VARIANT</div>
                                        <select className="px-2 mr-1 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none" id="players" onChange={ e => setOptions(options => ({...options, ...{Variant: e.target.value.replace(/\s/g, "")}})) }>
                                            { config.variants.map(el => <option key={ el } value={ el }>{ el }</option>) }
                                        </select>
                                    </> : null
                                }
                                {
                                    config.minTeams !== config.maxTeams ? <>
                                        <div className="mx-1 font-black text-blue-500">PLAYERS</div>
                                        <select className="px-2 bg-zinc-800 text-xs h-6 border font-bold border-zinc-100 focus:outline-none" id="players" onChange={ e => setTeams(parseInt(e.target.value)) }>
                                            { Array(config.maxTeams - config.minTeams + 1).fill().map((_, idx) => config.minTeams + idx).map(el => <option key={ el } value={ el }>{ el }</option>) }
                                        </select>
                                    </> : null
                                }
                                { children }
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
