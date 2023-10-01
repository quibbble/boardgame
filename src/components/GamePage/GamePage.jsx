import React, { useEffect, forwardRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowUndoSharp } from "react-icons/io5"
import { useParams, useNavigate } from "react-router-dom";
import { ConnStatus } from "./ConnStatus";
import { GetSnapshot } from "../../api/API";

export const GamePage = forwardRef((props, ref) => {
   const {config, ws, 
      game, setGame, 
      network, setNetwork, 
      chat, setChat, 
      connected, setConnected, 
      error, setError, 
      children} = props;

   const { gameID } = useParams();
   const navigate = useNavigate();

   // websocket connectivity logic 
   const [isConn, setIsConn] = useState(true);

   useEffect(() => {
      if (connected && network && connected[network.Name]) {
         localStorage.setItem(gameID, connected[network.Name]);
      }
   }, [network, connected, gameID])

   useEffect(() => {
      let wasConnected = false
      const connect = async (retries) => {
         if (retries <= 0) {
            navigate("/")
            return
         }

         let snapshot = await GetSnapshot(config.host, config.key, gameID);
         if (!snapshot) {
            if (wasConnected) sessionStorage.setItem("gameID", gameID)
            navigate(`/status/down`);
            return
         }
         if (snapshot.status !== 200) {
            navigate("/")
            return
         }

         ws.current = new WebSocket(`${ config.websocket }/game/join?GameKey=${ config.key }&GameID=${ gameID }`);
         ws.current.onopen = () => {
            setIsConn(true)
            wasConnected = true
            let team = localStorage.getItem(gameID)
            if (team) setTeam(team)
         };
         ws.current.onclose = () => {
            setIsConn(false)
            setTimeout(function() {
               connect(retries-1);
            }, 1000 + ((3-retries)*500));
         };
         ws.current.onmessage = async e => {
            let msg = JSON.parse(e.data);
            if (msg.Type === "Game") setGame(msg.Payload);
            else if (msg.Type === "Network") setNetwork(msg.Payload);
            else if (msg.Type === "Chat") setChat(c => c.concat([msg.Payload]));
            else if (msg.Type === "Connected") setConnected(msg.Payload);
            else if (msg.Type === "Error") setError(msg.Payload);
         };
         ws.current.onerror = e => {
            console.error('Socket encountered error: ', e.message, 'Closing socket');
            ws.current.close();
         };
      }
      let retries = 3
      connect(retries)
   }, [ws, gameID, navigate]);

   // websocket messages
   const setTeam = (team) => {
      if (!ws.current) return;
      ws.current.send(JSON.stringify({"ActionType": "SetTeam", "MoreDetails": {"Team": team}}));
   }

   const resetGame = () => {
      if (!ws.current) return;
      const variant = game && game.MoreData && game.MoreData.Variant ? game.MoreData.Variant : ""
      ws.current.send(JSON.stringify({"ActionType": "Reset", "MoreDetails": {"MoreOptions": {"Seed": Date.now(), "Variant": variant }}}));
   }

   const undoAction = () => {
      if (!ws.current) return;
      if (game && connected && network && game.Actions && game.Actions.length > 0 && game.Actions[game.Actions.length-1].Team !== connected[network.Name]) return;
      ws.current.send(JSON.stringify({"ActionType": "Undo"}));
   }

   // trigger used to force a refresh of the page
   const [trigger, setTrigger] = useState(true);
   useEffect(() => {
      const handleResize = () => setTrigger(!trigger);
      window.addEventListener("resize", handleResize);
      return _ => window.removeEventListener("resize", handleResize)
   });

   // copied logic
   const [copied, setCopied] = useState(0);
   useEffect(() => {
      if (copied > 0) setTimeout(() => setCopied(copied-1), 1000);
   }, [copied]);

   return (
      <div className="min-h-screen flex flex-col items-center p-2 md:p-4 fade-in">
         <div ref={ref} className={`h-full w-full ${ config.gamePageMaxWidth } flex flex-col items-center grow`}>
               <div className="flex justify-between items-center relative w-full mb-1 justfy-self-start font-thin text-sm">
                  <div>
                     Share this link:&nbsp;
                     <span className="underline cursor-pointer" onClick={() => {
                        setCopied(1);
                        navigator.clipboard.writeText(`${ window.location.protocol }//${ window.location.host }/${ gameID }`)
                     }}>
                        { `${ window.location.protocol }//${ window.location.host }/${ gameID }` }
                     </span>
                     {
                        copied > 0 ?
                           <div className="absolute mt-2 w-full flex justify-center">
                              <div className="absolute top-[-12px] w-6 overflow-hidden inline-block">
                                    <div className=" h-4 w-4 bg-zinc-600 rotate-45 transform origin-bottom-left" />
                              </div>
                              <div className="font-bold text-xs text-center bg-zinc-600 px-2 py-1">copied!</div>
                           </div> : null
                     }
                  </div>
                  <div className="px-1">
                     <ConnStatus isConn={isConn} />
                  </div>
               </div>
               <hr className="w-full mb-2"/>
               <div className="flex w-full justify-between items-center mb-4">
                  <div className="flex">
                     { 
                        game ? 
                           game.Teams.map(el => 
                              <div key={ el } 
                                    className={ `text-xs flex items-center justify-center font-bold cursor-pointer mr-1 w-6 h-6 rounded-full border-4 border-${ el }-500 ${ network && connected && connected[network.Name] === el  ? `bg-${ connected[network.Name] }-500` : "" }` } 
                                    onClick={ () => setTeam(el) }>
                                       { game && game.MoreData && game.MoreData.Points ? game.MoreData.Points[el] : "" }
                              </div>) : null 
                     }
                  </div>
                  <div className={ `font-extrabold ${ game && connected && network && connected[network.Name] && game.Winners.length === 0 ? `text-${ game.Turn }-500` : "text-zinc-100" } ${game && network && connected && connected[network.Name] === game.Turn && game.Winners.length === 0 ? "animate-pulse" : ""}` }>
                     { 
                        game && connected && network && connected[network.Name] ? 
                           game.Message : 
                           <div className="flex items-center animate-pulse">
                              <BsArrowLeft className="mr-1" />
                              <div>select a team</div>
                           </div>
                     }
                  </div>
               </div>
            
               <div className="h-full w-full flex flex-col justify-center items-center grow">
                  {/* unique game components go here */}
                  { children }
               </div>

               <hr className="w-full mb-2"/>
               <div className="w-full flex justify-between items-center">
                  <div className={`leading-4 text-2xl font-black text-${ config.color } cursor-pointer`}>
                     <button onClick={ () => {
                        sessionStorage.setItem("gameID", "")
                        navigate("/")
                     }}>
                        <span className={`font-['${ config.font }']`}>{ config.key }</span>
                        <span className="ml-1 text-[0.5rem] md:text-xs text-zinc-100">{ game && game.MoreData && game.MoreData.Variant ? game.MoreData.Variant : "" }</span>
                     </button>
                  </div>
                  <div className="flex">
                     <button onClick={() => resetGame()} title="reset game" className={`p-2 ${ game && game.Winners.length > 0 ? "bg-blue-500" : "bg-zinc-500"} mr-3 md:mr-2 rounded-full`}>
                        <IoMdRefresh />
                     </button>
                     <button onClick={() => undoAction()} title="undo move" className={`p-2 ${ game && connected && network && game.Actions && game.Actions.length > 0 && game.Actions[game.Actions.length-1].Team === connected[network.Name] ? "bg-amber-500" : "bg-zinc-700 text-zinc-500 cursor-default" } mr-3 md:mr-2 rounded-full`}>
                        <IoArrowUndoSharp />
                     </button>
                     <button onClick={() => {
                        sessionStorage.setItem("gameID", gameID);
                        navigate("/rules")
                     }} title="how to play" className="p-2 bg-blue-500 italic text-xs font-bold">
                        game rules
                     </button>
                     <div className="hidden md:flex italic text-xs ml-2 py-1 px-2 border-blue-500 border border-dashed text-blue-500">
                        <a href="https://quibbble.com" target="_blank">more <span className="text-zinc-200 font-['lobster'] text-sm not-italic">quibbble</span> games</a>
                     </div>
                  </div>
               </div>
         </div>
      </div>
)})
